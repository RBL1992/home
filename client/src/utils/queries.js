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
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      hvac {
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      alarm {
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      gutter {
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
