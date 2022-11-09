const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
    referralLink: String
    homePoints: String
  }
  type Filter {
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
  }

  type Home {
    homeName: String
    userId: String
    filter: [Filter]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getAllUsers: [User]
    allUserFeatures(userId: String!): [Home]
    getAllHomes: [Home]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addFilterToHome(
      userId: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home
    addHome(userId: String!, homeName: String!): Home
  }
`;

module.exports = typeDefs;
