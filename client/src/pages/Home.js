import React, {useState} from "react";
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
  const [featureList, setFeatureList] = useState([])
  const {loading, data, error} = useQuery(QUERY_ME, {onCompleted: (data) => setFeatureList([...data.me.filter, ...data.me.gutter, ...data.me.alarm, ...data.me.hvac])});

  if (loading) {
    return <div> Loading ... </div>;
  };
  if(error) {
    return "Error loading data!";
  };
  if(!data) {
    return "No data available!";
  };

  return (

    <div>
      <div className="feature-modal-btn">
        <FeatureModal featureList={featureList} setFeatureList={setFeatureList} />
      </div>
      <button style={styles.featureBtn} id="feature-btn">
        Add Feature
      </button>

      <div className="flex flex-row justify-center align-center">
        <Card
          featureList={featureList}
        />
      </div>
    </div>
  );
};

export default Home;
