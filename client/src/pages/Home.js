import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import FeatureModal from '../components/FeatureModal';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ALL_USER_FEATURES, QUERY_ME } from "../utils/queries";


const styles = {
  featureBtn: {
    padding: 12,
    border: "1px solid black",
  },
};

const Home = () => {
  const {loading, data} = useQuery(QUERY_ME);
console.log(data)
  // const { loading, data } = useQuery(ALL_USER_FEATURES, {
  //   variables: { userId: userId },
  // });

  const homeInfo = data?.me.filter || [];

  console.log(homeInfo.length)

  if (loading) {
    return <div> Loading ... </div>;
  }
  return (

    <div>
      <div className="feature-modal-btn">
        <FeatureModal />
      </div>
      <button style={styles.featureBtn} id="feature-btn">
        Add Feature
      </button>

      <div className="flex flex-row justify-center align-center">
        <Card
        homeInfo = {homeInfo}
        />
      </div>
    </div>
  );
};

export default Home;
