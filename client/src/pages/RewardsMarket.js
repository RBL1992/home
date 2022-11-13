import React from "react";
import { QUERY_REWARDS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import RewardCards from "../components/RewardCards";

const styles = {
  featureCard: {
    minHeight: 75,
    maxWidth: "auto",
    padding: 12,
    border: "2px solid black",
    margin: 24,
  },
};

const RewardsMarket = () => {
const { loading, data } = useQuery(QUERY_REWARDS);
  const rewards = data?.rewards || {};
    if (loading) {
      return <div> Loading ... </div>;
    }

  return (
    <div>
      <div className="flex flex-row justify-center align-center">
        <RewardCards
          rewardsList={rewards}
        />
      </div>
    </div>
  );
}

export default RewardsMarket;
