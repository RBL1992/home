import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $profilePic: Upload!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, profilePic: $profilePic) {
      token
      user {
        _id
        email
        firstName
        lastName
        profilePic
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_HOME = gql`
  mutation AddHome($addHomeUserId: String!, $homeName: String!) {
    addHome(userId: $addHomeUserId, homeName: $homeName) {
      homeName
      userId
    }
  }
`;

export const ADD_FEATURE = gql`
  mutation AddFeatureToHome(
    $userId: String!
    $featureCategory: String!
    $room: String!
    $lastMaintenanceDate: String!
    $itemCategory: String!
    $brandName: String
  ) {
    addFeatureToHome(
      userId: $userId
      featureCategory: $featureCategory
      room: $room
      lastMaintenanceDate: $lastMaintenanceDate
      itemCategory: $itemCategory
      brandName: $brandName
    ) {
      alarm {
        _id
        itemCategory
        room
        nextMaintenanceDate
        lastMaintenanceDate
        brandName
      }
      filter {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      gutter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvac {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      doorbell {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      outlet {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      ceilingfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exhaustfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      regrout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      downspout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      drains {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      waterheater {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      sumppump {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      roof {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      foundation {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      siding {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      paint {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exteriorsurfacecracks {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      airconditioningunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      critter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      trimming {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvacunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      disposal {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      coils {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      washingmachine {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      fireextinguisher {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      dryervent {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      seals {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      homeName
      userId
    }
  }
`;

export const EDIT_FEATURE = gql`
  mutation EditFeature(
    $_id: ID!
    $featureCategory: String!
    $itemCategory: String
    $brandName: String
    $room: String
    $lastMaintenanceDate: String
    $nextMaintenanceDate: String
  ) {
    editFeature(
      _id: $_id
      featureCategory: $featureCategory
      itemCategory: $itemCategory
      brandName: $brandName
      room: $room
      lastMaintenanceDate: $lastMaintenanceDate
      nextMaintenanceDate: $nextMaintenanceDate
    ) {
      userId
      filter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvac {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      alarm {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      gutter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      doorbell {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      outlet {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      ceilingfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exhaustfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      regrout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      downspout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      drains {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      waterheater {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      sumppump {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      roof {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      foundation {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      siding {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      paint {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exteriorsurfacecracks {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      airconditioningunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      critter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      trimming {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvacunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      disposal {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      coils {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      washingmachine {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      fireextinguisher {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      dryervent {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      seals {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
    }
  }
`;

export const REMOVE_FEATURE = gql`
  mutation RemoveFeatureFromHome($userId: ID!, $_id: ID!, $featureCategory: String!) {
    removeFeatureFromHome(userId: $userId, _id: $_id, featureCategory: $featureCategory) {
      homeName
      userId
      filter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvac {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      alarm {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      gutter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      doorbell {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      outlet {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      ceilingfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exhaustfan {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      regrout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      downspout {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      drains {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      waterheater {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      sumppump {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      roof {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      foundation {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      siding {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      paint {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      exteriorsurfacecracks {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      airconditioningunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      critter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      trimming {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      hvacunit {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      disposal {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      coils {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      washingmachine {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      fireextinguisher {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      dryervent {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      seals {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
    }
  }
`;

export const EARN_POINTS = gql`
  mutation EarnPoints($userId: ID!) {
    earnPoints(userId: $userId) {
      _id
      currentHomePoints
      lifetimeHomePoints
      firstName
      email
      lastName
      password
      phoneNumber
      referralLink
    }
  }
`;

export const REDEEM_POINTS = gql`
  mutation RedeemPoints($userId: ID!, $redeemedPoints: Int) {
    redeemPoints(userId: $userId, redeemedPoints: $redeemedPoints) {
      _id
      currentHomePoints
      lifetimeHomePoints
      firstName
      email
      lastName
      password
      phoneNumber
      referralLink
    }
  }
`;
