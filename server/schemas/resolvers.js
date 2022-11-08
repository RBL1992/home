const { User, HomeItems } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    allHomes: async () => {
        return {name:'roy'}
    }
  },

//   Mutation: {
//   }
};

module.exports = resolvers;