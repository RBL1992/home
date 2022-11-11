import React from "react";
import UserProfile from "../components/UserProfile";
import '../Profile.css';
import { QUERY_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";

const styles = {

};

const Profile = () => {
  const { loading, data } = useQuery(QUERY_PROFILE);

  const profileInfo = data?.profile || {};

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
        {/* Status bar and contstruction points total */}
      </div>
    </div>
  );
};

export default Profile;
