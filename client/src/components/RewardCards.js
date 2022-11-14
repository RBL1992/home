import React from 'react';


const RewardCards = (props) => {
  console.log(props)
    return (
        <div>
          <div className="mt-6 text-sm font-medium text-gray-900 px-6
          lg:text-lg text-left">
            <p>Usable Reward Points: {props.profileInfo.currentHomePoints}
            </p>
            <p>Lifetime Reward Points: {props.profileInfo.lifetimeHomePoints}
            </p>
          </div>
        </div>
    );
};

export default RewardCards;
