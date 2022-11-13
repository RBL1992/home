import React from "react";
import UserProfile from "../components/UserProfile";
import '../Profile.css';
import { QUERY_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";
import RewardCards from "../components/RewardCards";


const Profile = () => {
  const { loading, data } = useQuery(QUERY_PROFILE);

  const profileInfo = data?.profile || {};

  console.log(profileInfo);
  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <div>
      <div>
        <UserProfile profileInfo={profileInfo}
        />
      </div>
      <div>
        <RewardCards profileInfo={profileInfo}
        />
      </div>
    </div>
  );
};

export default Profile;
