import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import FeatureModal from '../components/FeatureModal';

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";


const styles = {
  featureBtn: {
    padding: 12,
    border: "1px solid black",
  },
};

const Home = () => {
  const {loading, data} = useQuery(QUERY_ME);
console.log(data)
  const homeInfo = data ? [...data.me.filter, ...data.me.gutter, ...data.me.alarm, ...data.me.hvac] : [];

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
