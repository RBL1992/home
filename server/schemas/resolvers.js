const { User, HomeAssistant, Rewards } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find({});
    },
    allUserFeatures: async (parent, { userId }) => {
      return HomeAssistant.find({ userId });
    },
    getAllHomes: async () => {
      return HomeAssistant.find({});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        // const userData = await User.findOne({_id: context.user._id}).select("-__v -password")
        const homeAssistantData = await HomeAssistant.findOne({ userId: context.user._id }).populate('filter');
        return homeAssistantData;
      }
      throw new AuthenticationError("Not Logged In");
    },
    profile: async (parent, args, context) => {
      if (context.user) {
        const userProfile = await User.findOne({ _id: context.user._id })
        return userProfile
      }
    },
    rewards: async () => {
      return Rewards.find({});
    }
  },
// all mutations to the databases
  Mutation: {
    //sign up
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    //new home
    addHome: async (parent, { userId, homeName }) => {
      const newHome = await HomeAssistant.create({ userId, homeName });
      return newHome;
    },

    //new filter
    addFilterToHome: async (_, { userId, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const filterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newFilter = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { filter: filterInfo },
        },
        {
          new: true,
        }
      );
      return newFilter;
    },

    // new gutter
    addGutterToHome: async (_, { userId, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const gutterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newGutter = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { gutter: gutterInfo },
        },
        {
          new: true,
        }
      );
      return newGutter;
    },

    // new alarm
    addAlarmToHome: async (_, { userId, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const alarmInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newAlarm = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { alarm: alarmInfo },
        },
        {
          new: true,
        }
      );
      return newAlarm;
    },

    //new hvac
    addHvacToHome: async (_, { userId, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const hvacInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newHvac = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { hvac: hvacInfo },
        },
        {
          new: true,
        }
      );
      return newHvac;
    },

    // add points to user
    earnPoints: async (_, args, context) => {
      const earnedPoints = 250;
      const addPoints = User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $inc: { currentHomePoints: earnedPoints, lifetimeHomePoints: earnedPoints }
        },
        {
          new: true,
        }
      );
      return addPoints;
    },
    
    // spend points on rewards
    redeemPoints: async (_, args, context) => {
      const redeemPoints = User.findOneAndUpdate(
        {_id: context.user._id},
        {
          $inc: {currentHomePoints: -args.redeemedPoints}
        },
        {
          new: true,
        }
      );
      return redeemPoints;
    },

    // delete filter from home
    removeFilterFromHome: async (_, args) => {
      const removedFilter = HomeAssistant.findOneAndUpdate(
        {userId: args.userId},
        {
          $pull: {filter: {_id: args._id}},
        },
        {
          new: true,
        }
      );
      return removedFilter;
    },

    // delete alarm from home
    removeAlarmFromHome: async (_, args) => {
      const removedAlarm = HomeAssistant.findOneAndUpdate(
        {userId: args.userId},
        {
          $pull: {alarm: {_id: args._id}},
        },
        {
          new: true,
        }
      );
      return removedAlarm;
    },

    // delete gutter from home
    removeGutterFromHome: async (_, args) => {
      const removedGutter = HomeAssistant.findOneAndUpdate(
        {userId: args.userId},
        {
          $pull: {gutter: {_id: args._id}},
        },
        {
          new: true,
        }
      );
      return removedGutter;
    },

    // delete hvac from home
    removeHvacFromHome: async (_, args) => {
      const removedHvac = HomeAssistant.findOneAndUpdate(
        {userId: args.userId},
        {
          $pull: {hvac: {_id: args._id}},
        },
        {
          new: true,
        }
      );
      return removedHvac;
    },

    // change filter feature data
    editFilter: async (_, {_id, brandName, room, lastMaintenanceDate, itemCategory
    }) => {
      const filterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      }
      const editFilter = HomeAssistant.findOneAndUpdate(
        {"filter._id":_id},
        {
          $set: {"filter.$": filterInfo}
        },
        {
          new: true,
        }
      );
      return editFilter;
    },

    // change alarm feature data
    editAlarm: async (_, {_id, brandName, room, lastMaintenanceDate, itemCategory
    }) => {
      const alarmInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };
      const editAlarm = HomeAssistant.findOneAndUpdate(
        {"alarm._id": _id},
        {
          $set: {"alarm.$": alarmInfo}
        },
        {
          new: true,
        }
      );
      return editAlarm;
    },

    // change gutter feature data
    editGutter: async (_, {_id, brandName, room, lastMaintenanceDate, itemCategory
    }) => {
      const gutterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };
      const editGutter = HomeAssistant.findOneAndUpdate(
        {"gutter._id": _id},
        {
          $set: {"gutter.$": gutterInfo}
        },
        {
          new: true,
        }
      );
      return editGutter;
    },

    // change hvac feature data
    editHvac: async (_, {_id, brandName, room, lastMaintenanceDate, itemCategory
    }) => {
      const hvacInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };
      const editHvac = HomeAssistant.findOneAndUpdate(
        {"hvac._id": _id},
        {
          $set: {"hvac.$": hvacInfo}
        },
        {
          new: true,
        }
      );
      return editHvac;
    },
  },
};

module.exports = resolvers;
