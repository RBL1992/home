import React from "react";

// < div >
// { featureList &&
// featureList.map((feature, i) => (
//   <div key={i}>
//     <div
//       style={styles.featureCard}
//       className="flex flex-col justify-center align-center"
//     >
//       <h3>{feature.itemCategory}</h3>
//       <img src={feature.image} alt="card img" />
//       <p className="card-room">Room: {feature.room}</p>
//       <p className="card-m-date">
//         Last Maintenance: {feature.lastMaintenanceDate}
//       </p>
//       {feature.brandName && (
//         <p>{feature.brandName}</p>
//       )}
//     </div>
//   </div>
// ))}
//   </ >

export default function Card({ featureList }) {
  if (!featureList.length) {
    return <h3> No Home Info recorded</h3>;
  }
  return (
    <div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featureList && featureList.map((feature, i) => (
          <div key={i}>
            <li
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={feature.image} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">Category: {feature.itemCategory}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">Brand: {feature.brandName}</dd>
                  <dd className="text-sm text-gray-500">Room: {feature.room}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      {feature.lastMaintenanceDate}
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