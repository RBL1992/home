const { User, HomeAssistant, Rewards } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return User.find({});
    },
    allUserFeatures: async (parent, {userId}) => {
      return HomeAssistant.find({ userId });
    },
    getAllHomes: async () => {
      return HomeAssistant.find({});
    },
    me: async (parent, context) => {
      if (context.user) {
        // const userData = await User.findOne({_id: context.user._id}).select("-__v -password")
        const homeAssistantData = await HomeAssistant.findOne({userId: context.user._id}).populate('filter')
        return homeAssistantData
      }
      throw new AuthenticationError("Not Logged In");
    },
    profile: async (parent, context) => {
      if (context.user) {
        const userProfile = await User.findOne({ userId: context.user._id })
        return userProfile
      }
    },
    rewards: async () => {
      return Rewards.find({});
    }
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },
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
    addHome: async ( parent, { userId , homeName}) => {
        const newHome = await HomeAssistant.create({userId , homeName})
        return newHome
    },
    addFilterToHome: async (_, {userId, brandName, room, lastMaintenanceDate, itemCategory}) => {
        const filterInfo = {
          brandName, room, lastMaintenanceDate, itemCategory
        };

        const newFilter = HomeAssistant.findOneAndUpdate(
          {userId},
          {
            $addToSet: {filter: filterInfo},
          },
          {
            new: true,
          }
        );
        return newFilter;
    },
    addGutterToHome: async (_, {userId, brandName, room, lastMaintenanceDate, itemCategory}) => {
      const gutterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newGutter = HomeAssistant.findOneAndUpdate(
        {userId},
        {
          $addToSet: {gutter: gutterInfo},
        },
        {
          new: true,
        }
      );
      return newGutter;
    },
    addAlarmToHome: async (_, {userId, brandName, room, lastMaintenanceDate, itemCategory}) => {
      const alarmInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newAlarm = HomeAssistant.findOneAndUpdate(
        {userId},
        {
          $addToSet: {alarm: alarmInfo},
        },
        {
          new: true,
        }
      );
      return newAlarm;
    },
    addHvacToHome: async (_, {userId, brandName, room, lastMaintenanceDate, itemCategory}) => {
      const hvacInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      };

      const newHvac = HomeAssistant.findOneAndUpdate(
        {userId},
        {
          $addToSet: {hvac: hvacInfo},
        },
        {
          new: true,
        }
      );
      return newHvac;
    },
    earnPoints: async (_, args, context) => {
      const earnedPoints = 250;
      const addPoints = User.findOneAndUpdate(
        {_id: context.user._id},
        {
          $inc: {currentHomePoints: earnedPoints, lifetimeHomePoints: earnedPoints}
        },
        {
          new: true,
        }
      );
      return addPoints;
    }
  },
}

module.exports = resolvers;
