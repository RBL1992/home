import {gql} from "@apollo/client";

export const ALL_USER_FEATURES = gql`
  query AllUserFeatures($userId: String!) {
    allUserFeatures(userId: $userId) {
      homeName
      userId
      filter {
        brandName
        itemCategory
        lastMaintenanceDate
        room
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      homeName
      userId
      filter {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      hvac {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      alarm {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      doorbell {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      outlet {
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
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      ceilingFan {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      exhaustFan {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
    }
  }
`;

export const QUERY_PROFILE = gql`
  query Query {
    profile {
      _id
      email
      firstName
      lastName
      phoneNumber
      currentHomePoints
      lifetimeHomePoints
    }
  }
`;

export const QUERY_REWARDS = gql`
  query Query {
    rewards {
      rewardDescription
      homePointsCost
    }
  }
`;
