import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
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
      homeName
      userId
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

export const ADD_HOME = gql`
  mutation AddHome($addHomeUserId: String!, $homeName: String!) {
    addHome(userId: $addHomeUserId, homeName: $homeName) {
      homeName
      userId
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
    }
  }
`;

export const EDIT_FILTER = gql`
  mutation EditFilter(
    $_id: ID!
    $lastMaintenanceDate: String
    $brandName: String
    $room: String
    $itemCategory: String
  ) {
    editFilter(
      _id: $_id
      lastMaintenanceDate: $lastMaintenanceDate
      brandName: $brandName
      room: $room
      itemCategory: $itemCategory
    ) {
      filter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      userId
      homeName
    }
  }
`;

export const EDIT_ALARM = gql`
  mutation EditAlarm(
    $_id: ID!
    $lastMaintenanceDate: String
    $brandName: String
    $room: String
    $itemCategory: String
  ) {
    editAlarm(
      _id: $_id
      lastMaintenanceDate: $lastMaintenanceDate
      brandName: $brandName
      room: $room
      itemCategory: $itemCategory
    ) {
      alarm {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      userId
      homeName
    }
  }
`;

export const EDIT_GUTTER = gql`
  mutation EditGutter(
    $_id: ID!
    $lastMaintenanceDate: String
    $brandName: String
    $room: String
    $itemCategory: String
  ) {
    editGutter(
      _id: $_id
      lastMaintenanceDate: $lastMaintenanceDate
      brandName: $brandName
      room: $room
      itemCategory: $itemCategory
    ) {
      gutter {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      userId
      homeName
    }
  }
`;

export const EDIT_HVAC = gql`
  mutation EditHvac($_id: ID!, $lastMaintenanceDate: String, $brandName: String, $room: String, $itemCategory: String) {
    editHvac(
      _id: $_id
      lastMaintenanceDate: $lastMaintenanceDate
      brandName: $brandName
      room: $room
      itemCategory: $itemCategory
    ) {
      hvac {
        _id
        brandName
        room
        lastMaintenanceDate
        itemCategory
        nextMaintenanceDate
      }
      userId
      homeName
    }
  }
`;
