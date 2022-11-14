import React from "react";
import { QUERY_PROFILE, QUERY_ME } from "../utils/queries";
import { REDEEM_POINTS } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import redeemIcon from "../images/redeem.svg";

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
  redeemBtn: {
    backgroundColor: "rgb(113 113 122)",
  },
};

const MarketRewardCards = ({ rewardsList }) => {
  const { loading, data, error } = useQuery(QUERY_PROFILE);
  const profileInfo = data?.profile || {};
  const userId = profileInfo._id


  // getting the points for the current user
  const userPoints = profileInfo.currentHomePoints;

  // determining which style to apply based on the reward cost and user's points
  const cardStyle = (rewardCost) => {
    if (userPoints >= rewardCost) {
      return styles.affordable;
    } else { return styles.unaffordable; }
  };
  const [redeemPoints, { error3 }] = useMutation(REDEEM_POINTS);

  const spendPoints = async (event) => {
    event.preventDefault();

    // The below variable finds the ".affordable" hidden div and takes it's style attribute value for the isAffordable comparison
    const affordableCSS = document.querySelector(".affordable").getAttribute("style")
    const targetStyle = event.target.parentNode.parentNode.firstChild.getAttribute("style")
    const isAffordable = targetStyle === affordableCSS

    const redeemedPoints = parseInt(event.target.parentNode.parentNode.firstChild.children[1].textContent)
    // const clickedBtn = event.target.parentNode

    // if the target reward is affordable, redeem the reward. If not, ignore the click.
    if (isAffordable) {
      try {
        const data = await redeemPoints({
          variables: { userId, redeemedPoints }
        });
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  }

  // mapping a new key value pair to each object in rewardsList to give back the right style
  const newRewardsList = rewardsList.map(reward => ({ ...reward, styles: cardStyle(reward.homePointsCost) }));

  if (!rewardsList.length) {
    return <h3>No rewards availabile right now.</h3>;
  }
  return (
    <div>
      {rewardsList &&
        newRewardsList.map((reward, i) => (
          <div key={i} className="my-6 flex flex-column justify-center" >
            <div className="flex justify-between items-center mx-3 w-4/5 rounded-md self-center" style={reward.styles}>
              <p className="mx-5">{reward.rewardDescription}</p>
              <p className="mx-5">{reward.homePointsCost}</p>
            </div>
            <button onClick={spendPoints}> <img className="mx-auto h-12 w-12 flex-shrink-0 rounded-full" src={redeemIcon} alt="" />
            </button>
          </div>
        ))}
      {/* The below hidden div is needed for the isAffordable comparison which prevents spending points when clicking on unaffordable rewards */}
      <div name="affordable style holder" className="affordable hidden" style={styles.affordable}></div>
    </div>
  );
};

export default MarketRewardCards;
