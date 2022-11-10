import React from "react";
import Card from '../components/Card';

const styles = {
  featureBtn: {
    padding: 12,
    border: '1px solid black'
  }
};

function Home() {
  return (
    <div>
      <button style={styles.featureBtn} id='feature-btn'>Add Feature</button>

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