const { User, HomeAssistant, Rewards } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
      throw new AuthenticationError('Not Logged In');
    },
    profile: async (parent, args, context) => {
      if (context.user) {
        const userProfile = await User.findOne({ _id: context.user._id });
        return userProfile;
      }
    },
    rewards: async () => {
      return Rewards.find({});
    },
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
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    //new home
    addHome: async (parent, { userId, homeName }) => {
      const newHome = await HomeAssistant.create({ userId, homeName });
      return newHome;
    },

    // Add Feature
    addFeatureToHome: async (_, { userId, featureCategory, brandName, room, lastMaintenanceDate, itemCategory }) => {
      const featureInfo = {
        brandName,
        room,
        lastMaintenanceDate,
        itemCategory,
      };
      const lowCaseFeatureCategory = featureCategory.toLowerCase();

      const newFeature = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $addToSet: { [lowCaseFeatureCategory]: featureInfo },
        },
        {
          new: true,
        }
      );
      return newFeature;
    },

    // Edit Feature
    editFeature: async (
      _,
      { _id, brandName, room, lastMaintenanceDate, nextMaintenanceDate, itemCategory, featureCategory }
    ) => {
      const lowCaseFeatureCategory = featureCategory.toLowerCase();
      const featureInfo = {
        _id, //This fucking destroyed me; I struggled for 2 days because everytime I updated the db from the frontend the _id would change!!! THIS WAS THE MISSING PIECE cuz we weren't passing the _id in the data so MongoDB was creating a new ID
        brandName,
        room,
        lastMaintenanceDate,
        nextMaintenanceDate,
        itemCategory,
      };
      const editFeature = HomeAssistant.findOneAndUpdate(
        { [`${lowCaseFeatureCategory}._id`]: _id },
        {
          $set: { [`${lowCaseFeatureCategory}.$`]: { ...featureInfo } },
        },
        {
          new: true,
        }
      );
      return editFeature;
    },

    // Remove Feature
    removeFeatureFromHome: async (_, { userId, _id, featureCategory }) => {
      const lowCaseFeatureCategory = featureCategory.toLowerCase();
      const removedFeature = HomeAssistant.findOneAndUpdate(
        { userId },
        {
          $pull: { [lowCaseFeatureCategory]: { _id } },
        },
        {
          new: true,
        }
      );
      return removedFeature;
    },

    // add points to user
    earnPoints: async (_, args, context) => {
      const earnedPoints = 250;
      const addPoints = User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $inc: { currentHomePoints: earnedPoints, lifetimeHomePoints: earnedPoints },
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
        { _id: context.user._id },
        {
          $inc: { currentHomePoints: -args.redeemedPoints },
        },
        {
          new: true,
        }
      );
      return redeemPoints;
    },
  },
};

module.exports = resolvers;
