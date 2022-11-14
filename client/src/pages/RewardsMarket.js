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
    <div className="flex flex-row justify-center align-center">
      <div>
        <MarketRewardCards
          rewardsList={rewards} />
      </div>
    </div>
  );
};

export default RewardsMarket;
