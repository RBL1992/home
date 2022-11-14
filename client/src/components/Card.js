import React from "react";
import filterIcon from "../images/filter.svg";
import gutterIcon from "../images/gutter.svg";
import alarmIcon from "../images/fireAlarm.svg";
import hvacIcon from "../images/fan.svg";
import deleteIcon from "../images/delete.svg";
import {useMutation} from '@apollo/client';
import {useQuery} from "@apollo/client";
import {REMOVE_FILTER, REMOVE_ALARM, REMOVE_HVAC, REMOVE_GUTTER} from '../utils/mutations';
import {QUERY_ME} from "../utils/queries";

const dayjs = require('dayjs');
var AdvancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(AdvancedFormat);

const icons = {
  Filter: filterIcon,
  Gutter: gutterIcon,
  Alarm: alarmIcon,
  Hvac: hvacIcon
};

const styles = {
  oneMonth: {
    backgroundColor: "yellow",
    color: "black"
  },
  oneWeek: {
    backgroundColor: "orange",
    color: "black"
  },
  maintain: {
    backgroundColor: "red",
    color: "white"
  },
  normal: {
    backgroundColor: "gray",
    color: "white"
  }
};

export default function Card({featureList, setFeatureList}) {
  const [removeFilter, {error1}] = useMutation(REMOVE_FILTER);
  const [removeAlarm, {error2}] = useMutation(REMOVE_ALARM);
  const [removeHvac, {error3}] = useMutation(REMOVE_HVAC);
  const [removeGutter, {error4}] = useMutation(REMOVE_GUTTER);

  // querying the current user that is logged in
  const {loading, data} = useQuery(QUERY_ME);
  const userId = data.me.userId;
  //function to determine which styles need to be applied to each feature maintenance date
  const cardStyle = (dateMaintain) => {
    if(dayjs() >= dayjs(dateMaintain).add(-7, 'day') && dayjs() <= dayjs(dateMaintain)) {
      return styles.oneWeek;
    } else if(dayjs() >= dayjs(dateMaintain).add(-30, 'day') && dayjs() <= dayjs(dateMaintain)) {
      return styles.oneMonth;
    } else if(dayjs() >= dayjs(dateMaintain)) {
      return styles.maintain;
    } else {
      return styles.normal;
    }
  };
  const featureIcon = (typename) => {
    if(typename === "Filter") {
      return icons.Filter;
    } else if(typename === 'Alarm') {
      return icons.Alarm;
    } else if(typename === 'Gutter') {
      return icons.Gutter;
    } else {return icons.Hvac;}
  };

  const deleteFeature = async (event) => {
    event.preventDefault();
    const featureType = event.target.name;
    const _id = event.target.getAttribute("data-id");

    if(featureType === "Filter") {
      try {
        const data = await removeFilter({
          variables: {userId, _id},
        });
        if(data) {
          setFeatureList([...featureList.filter((feature) => {return feature._id !== _id})]);
        }
      } catch(err) {
        console.error(err);
      }
    } else if(featureType === "Alarm") {
      try {
        const data = await removeAlarm({
          variables: {userId, _id},
        });
        if(data) {
          setFeatureList([...featureList.filter((feature) => {return feature._id !== _id;})]);
        }
      } catch(err) {
        console.error(err);
      }
    } else if(featureType === "Gutter") {
      try {
        const data = await removeGutter({
          variables: {userId, _id},
        });
        if(data) {
          setFeatureList([...featureList.filter((feature) => {return feature._id !== _id;})]);
        }
      } catch(err) {
        console.error(err);
      }
    } else {
      try {
        const data = await removeHvac({
          variables: {userId, _id},
        });
        if(data) {
          setFeatureList([...featureList.filter((feature) => {return feature._id !== _id;})]);
        }
      } catch(err) {
        console.error(err);
      }
    }
  };

  // mapping a new key value pair to each object in featureList to give back the right style
  const newFeatureList = featureList.map(feature => ({...feature, styles: cardStyle(feature.nextMaintenanceDate), image: featureIcon(feature.__typename)}));
  if(!featureList.length) {
    return <h3> No Home Info recorded</h3>;
  }
  return (
    <div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featureList && newFeatureList.map((feature, i) => (
          <div key={i}>
            <li
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="flex flex-row-reverse">
                  <button onClick={deleteFeature} ><img name={feature.__typename} data-id={feature._id} className="min-w-min h-5 w-5 flex-shrink-0 " src={deleteIcon} alt="" /></button></div>
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={feature.image} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">Category: {feature.itemCategory}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">Brand: {feature.brandName}</dd>
                  <dd className="text-sm text-gray-500">Room: {feature.room}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800" style={feature.styles}>
                      {feature.nextMaintenanceDate}
                    </span>
                  </dd>
                </dl>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div >
  );
};
