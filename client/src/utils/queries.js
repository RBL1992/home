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
        room
      }
      hvac {
        brandName
        itemCategory
        lastMaintenanceDate
        room
      }
      alarm {
        brandName
        itemCategory
        lastMaintenanceDate
        room
      }
      gutter {
        brandName
        itemCategory
        lastMaintenanceDate
        room
      }
    }
  }
`;
