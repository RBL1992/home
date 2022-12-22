import { gql } from '@apollo/client';

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
      gutter {
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
      ceilingfan {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      exhaustfan {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      regrout {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      downspout {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      drains {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      waterheater {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      sumppump {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      roof {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      foundation {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      siding {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      paint {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      exteriorsurfacecracks {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      airconditioningunit {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      critter {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      trimming {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      hvacunit {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      disposal {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      coils {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      washingmachine {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      fireextinguisher {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      dryervent {
        _id
        brandName
        itemCategory
        lastMaintenanceDate
        nextMaintenanceDate
        room
      }
      seals {
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
      profilePic
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
