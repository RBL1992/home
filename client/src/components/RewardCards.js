import React from 'react';


// const styles = {
//   phoneButton: {
//     padding: 16,
//   },

//   phoneButtonEl: {
//     color: "#fff",
//     width: 12,
//     height: 12,
//   },

//   userCard: {
//     border: "2px solid black",
//     padding: 20,
//   },

//   userDetail: {
//     margin: "24px 0",
//   },
// };

const RewardCards = (props) => {
  console.log(props)
    return (
        <div>
          <div>
            <p>Usable Reward Points: 
              {props.profileInfo.currentHomePoints}
            </p>
            <p>Lifetime Reward Points: 
              {props.profileInfo.lifetimeHomePoints}
            </p>
          </div>
        </div>
      
    );
};

export default RewardCards;
