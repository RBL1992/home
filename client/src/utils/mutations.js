import {gql} from '@apollo/client';

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

export const ADD_FILTER = gql`
mutation AddFilterToHome($userId: String!, $room: String!, $lastMaintenanceDate: String!, $itemCategory: String!, $brandName: String) {
  addFilterToHome(userId: $userId, room: $room, lastMaintenanceDate: $lastMaintenanceDate, itemCategory: $itemCategory, brandName: $brandName) {
    userId
    homeName
    filter {
      brandName
      itemCategory
      lastMaintenanceDate
      room
    }
  }
}
`;
export const ADD_ALARM = gql`
mutation AddAlarmToHome($userId: String!, $room: String!, $lastMaintenanceDate: String!, $itemCategory: String!, $brandName: String) {
  addAlarmToHome(userId: $userId, room: $room, lastMaintenanceDate: $lastMaintenanceDate, itemCategory: $itemCategory, brandName: $brandName) {
    userId
    homeName
    alarm {
      brandName
      itemCategory
      lastMaintenanceDate
      room
    }
  }
}
`;

export const ADD_HVAC = gql`
mutation AddHvacToHome($userId: String!, $room: String!, $lastMaintenanceDate: String!, $itemCategory: String!, $brandName: String) {
  addHvacToHome(userId: $userId, room: $room, lastMaintenanceDate: $lastMaintenanceDate, itemCategory: $itemCategory, brandName: $brandName) {
    userId
    homeName
    hvac {
      brandName
      itemCategory
      lastMaintenanceDate
      room
    }
  }
}
`;

export const ADD_GUTTER = gql`
mutation AddGutterToHome($userId: String!, $room: String!, $lastMaintenanceDate: String!, $itemCategory: String!, $brandName: String) {
  addGutterToHome(userId: $userId, room: $room, lastMaintenanceDate: $lastMaintenanceDate, itemCategory: $itemCategory, brandName: $brandName) {
    userId
    homeName
    gutter {
      brandName
      itemCategory
      lastMaintenanceDate
      room
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
}`;
export const ADD_HOME = gql`
mutation AddHome($addHomeUserId: String!, $homeName: String!) {
  addHome(userId: $addHomeUserId, homeName: $homeName) {
    homeName
    userId
  }
}
`