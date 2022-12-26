const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    pictureUrl: String
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

  type Doorbell {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Outlet {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type CeilingFan {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type ExhaustFan {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Regrout {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Downspout {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Drains {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type WaterHeater {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type SumpPump {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Roof {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Foundation {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Siding {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Paint {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type ExteriorSurfaceCracks {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type AirConditioningUnit {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Critter {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Trimming {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type HvacUnit {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Disposal {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Coils {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type WashingMachine {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type FireExtinguisher {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type DryerVent {
    _id: ID
    brandName: String
    room: String
    lastMaintenanceDate: String
    itemCategory: String
    nextMaintenanceDate: String
  }

  type Seals {
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
    doorbell: [Doorbell]
    outlet: [Outlet]
    ceilingfan: [CeilingFan]
    exhaustfan: [ExhaustFan]
    regrout: [Regrout]
    downspout: [Downspout]
    drains: [Drains]
    waterheater: [WaterHeater]
    sumppump: [SumpPump]
    roof: [Roof]
    foundation: [Foundation]
    siding: [Siding]
    paint: [Paint]
    exteriorsurfacecracks: [ExteriorSurfaceCracks]
    airconditioningunit: [AirConditioningUnit]
    critter: [Critter]
    trimming: [Trimming]
    hvacunit: [HvacUnit]
    disposal: [Disposal]
    coils: [Coils]
    washingmachine: [WashingMachine]
    fireextinguisher: [FireExtinguisher]
    dryervent: [DryerVent]
    seals: [Seals]
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
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, pictureUrl: String!): Auth

    login(email: String!, password: String!): Auth

    addHome(userId: String!, homeName: String!): Home

    addFeatureToHome(
      userId: String!
      featureCategory: String!
      brandName: String
      room: String!
      lastMaintenanceDate: String!
      itemCategory: String!
    ): Home

    editFeature(
      _id: ID!
      brandName: String
      room: String
      lastMaintenanceDate: String
      nextMaintenanceDate: String
      itemCategory: String
      featureCategory: String!
    ): Home

    removeFeatureFromHome(userId: ID!, _id: ID!, featureCategory: String!): Home

    earnPoints(userId: ID!): User

    redeemPoints(userId: ID!, redeemedPoints: Int): User
  }
`;

module.exports = typeDefs;
