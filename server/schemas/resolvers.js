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
    addHome: async ( parent, args) => {
      const newHome = HomeAssistant.create(args)
      return newHome
    },
    addFilterToHome: async (_, {userId, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const filterInfo = {
        brandName, room, lastMaintenanceDate, itemCategory
      }

      const newFilter = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { filter: filterInfo },
        },
        {
          new: true,
        }
      );
      return newFilter
    }
  },
}

module.exports = resolvers;
