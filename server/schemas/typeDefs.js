const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
    referralLink: String
    currentHomePoints: String
    lifetimeHomePoints: String
  }
  type Filter {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
  type Gutter {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
  type Alarm {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
  type Hvac {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Home {
    homeName: String
    userId: String
    filter: [Filter]
    hvac: [Hvac]
    alarm: [Alarm]
    gutter: [Gutter]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Rewards {
    rewardDescription: String
    homePointsCost: Int
  }

  type Query {
    getAllUsers: [User]
    allUserFeatures(userId: String!): [Home]
    getAllHomes: [Home]
    me: Home
    profile: User
    rewards: [Rewards]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addApplianceToHome(
      userId: String!
      featureCategory: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home

    addHome(userId: String!, homeName: String!): Home

    earnPoints(userId: ID!): User

    redeemPoints(userId: ID!, redeemedPoints: Int): User

    removeFilterFromHome(userId: ID!, _id: ID!): Home

    removeAlarmFromHome(userId: ID!, _id: ID!): Home

    removeGutterFromHome(userId: ID!, _id: ID!): Home

    removeHvacFromHome(userId: ID!, _id: ID!): Home

    editFilter(_id: ID!, brandName: String, room: String, lastMaintenanceDate: String, itemCategory: String): Home

    editAlarm(_id: ID!, brandName: String, room: String, lastMaintenanceDate: String, itemCategory: String): Home

    editGutter(_id: ID!, brandName: String, room: String, lastMaintenanceDate: String, itemCategory: String): Home

    editHvac(_id: ID, brandName: String, room: String, lastMaintenanceDate: String, itemCategory: String): Home
  }
`;

module.exports = typeDefs;
