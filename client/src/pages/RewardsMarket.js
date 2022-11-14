import React from "react";
import { QUERY_REWARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import MarketRewardCards from "../components/MarketRewardCards";


const RewardsMarket = () => {
  const { loading, data } = useQuery(QUERY_REWARDS);
  const rewards = data?.rewards || {};

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 place-content-between">
          <div className="float-left">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Rewards Market
            </h1>
          </div>
        </div>
      </header>
      <div className="flex flex-row justify-center align-center">
        <div className="w-full">
          <MarketRewardCards rewardsList={rewards} />
        </div>
      </div>
    </div>
  );
};

export default RewardsMarket;
