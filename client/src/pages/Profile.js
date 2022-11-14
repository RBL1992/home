import React from "react";
import UserProfile from "../components/UserProfile";
import '../Profile.css';
import { QUERY_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";
import RewardCards from "../components/RewardCards";

// const styles ={
//   profileCard: {
//     box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75),
//   },
// };

const Profile = () => {
  const { loading, data } = useQuery(QUERY_PROFILE);

  const profileInfo = data?.profile || {};

  console.log(profileInfo);
  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <>
    {/*
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    */}
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

          <div className="px-4 py-6 sm:px-0">
            <div className=" rounded-lg border-4 border-dashed border-gray-200 grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center ">
              //container1
              <div className="h-32 rounded col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center shadow">
              <UserProfile profileInfo={profileInfo}/>
              </div>
    
              <div className="h-32 rounded col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center shadow place-items-center">
              <RewardCards profileInfo={profileInfo}/>
              <a href="/rewards-market">
                <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                id="feature-btn">
                See Rewards
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
  );
};

export default Profile;

/* <div>
<div>
  <UserProfile profileInfo={profileInfo}
  />
</div>
<div>
  <RewardCards profileInfo={profileInfo}
  />
</div>
</div> */