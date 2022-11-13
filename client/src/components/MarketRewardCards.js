import React from "react";
import {QUERY_PROFILE} from "../utils/queries";
import {useQuery} from "@apollo/client";

//styling for different card types NEEDS to be updateds
const styles = {
  afforadable: {
    backgroundColor: "green",
    border: "2px solid black",
    padding: 20,
  },
  unaffordable: {
    backgroundColor: "gray",
    border: "2px solid black",
    padding: 20,
  }
};

const MarketRewardCards = ({rewardsList}) => {
  const {loading, data, error} = useQuery(QUERY_PROFILE);
  const profileInfo = data?.profile || {};
// getting the points for the current user
  const userPoints = profileInfo.currentHomePoints
// determining which style to apply based on the reward cost and user's points
  const cardStyle = (rewardCost) => {
    if(userPoints >= rewardCost) {
      return styles.afforadable
    } else {return styles.unaffordable;}
  }
  // mapping a new key value pair to each object in rewardsList to give back the right style
  const newRewardsList = rewardsList.map(reward => ({...reward, styles: cardStyle(reward.homePointsCost)}))

  if(!rewardsList.length) {
    return <h3>No rewards availabile right now.</h3>;
  }
  return (
    <div>
      {rewardsList &&
        newRewardsList.map((reward, i) => (
          <div key={i}>
            <div className="flex flex-row justify-center" >
              <div style={reward.styles}>
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
