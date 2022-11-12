import React from "react";

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
// const { loading, data } = useQuery(QUERY_PROFILE);

//   const profileInfo = data?.profile || {};

  return (
    <div>
      <div
        style={styles.featureCard}
        className="flex flex-row justify-between "
      >
        <h3>%5 Home Depot</h3>
        <p>Constuction Points</p>
      </div>
    </div>
  );
}

export default RewardsMarket;
