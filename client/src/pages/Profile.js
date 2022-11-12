import React from "react";
import UserProfile from "../components/UserProfile";
import '../Profile.css';
import { QUERY_PROFILE, QUERY_REWARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import RewardCards from "../components/RewardCards";

const styles = {

};

const Profile = () => {
  const { loading, data } = useQuery(QUERY_PROFILE);
  const {loadingRewards, dataRewards} = useQuery(QUERY_REWARDS);
  
  const profileInfo = data?.profile || {};
  const rewardsInfo = data?.rewards || {}

  console.log(profileInfo)
  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <div>
      <div>
        <UserProfile
          profileInfo={profileInfo}
        />
      </div>
      <div>
        <RewardCards
        rewards={rewardsInfo} profileInfo={profileInfo}
       />
      </div>
    </div>
  );
};

export default Profile;
