import React, { useState, Fragment } from "react";
import Card from "../components/Card";
import FeatureModal from '../components/FeatureModal';

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";


const Home = () => {

  const [featureList, setFeatureList] = useState([]);
  const {loading, data, error} = useQuery(QUERY_ME, {onCompleted: (data) => setFeatureList([...data.me.filter, ...data.me.gutter, ...data.me.alarm, ...data.me.hvac, ...data.me.doorbell, ...data.me.outlet, ...data.me.ceilingFan, ...data.me.exhaustFan])});

  if (loading) {
    return <div> Loading ... </div>;
  };
  if (error) {
    return "Error loading data!";
  };
  if (!data) {
    return "No data available!";
  };

  return (
    <>
      <div className="min-h-full">


        <header className="bg-white shadow">
          <div className="flex mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 place-content-between">
            <div className = "float-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home Features</h1>
            </div>
                <div className="feature-modal-btn">
                  <FeatureModal featureList={featureList} setFeatureList={setFeatureList} />
                </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

            <div className="px-4 py-6 sm:px-0">
              <div className=" rounded-lg border-4 border-dashed border-gray-200">

                <div className="flex flex-row justify-center align-center my-5">
                  <Card
                    featureList={featureList} setFeatureList={setFeatureList}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
