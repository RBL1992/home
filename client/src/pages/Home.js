import React from "react";
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import FeatureModal from '../components/FeatureModal';

function Home() {
  return (

    <div>
      <div className="feature-modal-btn">
        <FeatureModal />
      </div>

      <div className="flex flex-row justify-center align-center">
        <Card
          name='Filter'
          image='...'
          room='kitchen'
          maintenance='11/2/2022'
        />
        <Card
          name='Filter'
          image='...'
          room='kitchen'
          maintenance='11/2/2022'
        />
        <Card
          name='Filter'
          image='...'
          room='kitchen'
          maintenance='11/2/2022'
        />
        <Card
          name='Filter'
          image='...'
          room='kitchen'
          maintenance='11/2/2022'
        />
      </div>
    </div>
  );
}

export default Home;