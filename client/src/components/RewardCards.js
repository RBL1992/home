import React from 'react';


const styles = {
  phoneButton: {
    padding: 16,
  },

  phoneButtonEl: {
    color: "#fff",
    width: 12,
    height: 12,
  },

  userCard: {
    border: "2px solid black",
    padding: 20,
  },

  userDetail: {
    margin: "24px 0",
  },
};

const RewardCards = ({rewardsList}) => {
  if(!rewardsList.length) {
  return <h3>No rewards availabile right now.</h3>
  }

  return (
    <div>
      {rewardsList &&
        rewardsList.map((reward, i) => (
          <div key={i}>
            <div className="flex flex-row justify-center">
              <div style={styles.userCard}>
                <div>
                  <p style={styles.userDetail}>Reward Details:  {reward.rewardDescription}
                  </p>
                  <p style={styles.userDetail}>Home Point Cost:  {reward.homePointsCost}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
      );
};

export default RewardCards;
