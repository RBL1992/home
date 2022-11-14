import React from "react";
import { QUERY_PROFILE } from "../utils/queries";
import { useQuery } from "@apollo/client";

//styling for different card types NEEDS to be updateds
const styles = {
  affordable: {
    color: "#fff",
    backgroundColor: "rgb(109 40 217)",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
    padding: 20,
  },
  unaffordable: {
    color: "rgb(113 113 122)",
    backgroundColor: "rgb(212 212 216)",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
    padding: 20,
  },
};

const MarketRewardCards = ({ rewardsList }) => {
  const { loading, data, error } = useQuery(QUERY_PROFILE);
  const profileInfo = data?.profile || {};
  // getting the points for the current user
  const userPoints = profileInfo.currentHomePoints;
  // determining which style to apply based on the reward cost and user's points
  const cardStyle = (rewardCost) => {
    if (userPoints >= rewardCost) {
      return styles.affordable;
    } else { return styles.unaffordable; }
  };
  // mapping a new key value pair to each object in rewardsList to give back the right style
  const newRewardsList = rewardsList.map(reward => ({ ...reward, styles: cardStyle(reward.homePointsCost) }));

  if (!rewardsList.length) {
    return <h3>No rewards availabile right now.</h3>;
  }
  return (
    <div className="">
      {rewardsList &&
        newRewardsList.map((reward, i) => (
          <div key={i} className="flex flex-row justify-start align-center max-w-md">
            <div className="my-6">
              <div className="rounded-md" style={reward.styles}>
                <div>
                  <p>Reward Details:  {reward.rewardDescription}
                  </p>
                  <p>Home Point Cost:  {reward.homePointsCost}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MarketRewardCards;
