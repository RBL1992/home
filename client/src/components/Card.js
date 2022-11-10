import React from "react";

const styles = {
  featureCard: {
    minHeight: 200,
    maxWidth: "auto",
    padding: 12,
    border: "2px solid black",
    margin: 24,
  },
};

const Card = (homeInformation) => {
    const {homeInfo} = homeInformation
    console.log(homeInfo)
  if (!homeInfo.length) {
    return <h3> No Home Info recorded</h3>;
  } 
  return (
    <div>
      {homeInfo &&
        homeInfo.map((feature, i) => (
          <div key={i}>
            <div
              style={styles.featureCard}
              className="flex flex-col justify-center align-center"
            >
              <h3>{feature.itemCategory}</h3>
              <img src={feature.image} alt="card img" />
              <p className="card-room">Room: {feature.room}</p>
              <p className="card-m-date">
                Last Maintenance: {feature.lastMaintenanceDate}
              </p>
              {feature.brandName && (
                <p>{feature.brandName}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
