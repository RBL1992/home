const {gql} = require("apollo-server-express");

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
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
    type Gutter {
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
    type Alarm {
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }
    type Hvac {
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

    addAlarmToHome(
      userId: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home

    addGutterToHome(
      userId: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home

    addHvacToHome(
      userId: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home

    addHome(userId: String!, homeName: String!): Home

    earnPoints(
        userId: ID!
    ): User

    redeemPoints(
       userId: ID!
       redeemedPoints: Int
    ): User
  }
`;

module.exports = typeDefs;
