import React from "react";

// const styles = {
//   phoneButton: {
//     padding: 16,
//   },

//   phoneButtonEl: {
//     color: "#fff",
//     width: 12,
//     height: 12,
//   },

//   userCard: {
//     border: "2px solid black",
//     padding: 20,
//   },

//   userDetail: {
//     margin: "24px 0",
//   },
// };

const UserProfile = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <div
        className="flex flex-col justify-center align-center"
      >
        <p className="mt-6 text-sm font-medium text-gray-900">
          User First Name: {props.profileInfo.firstName}
        </p>
        <p className="text-sm font-medium text-gray-900">
          User Last Name: {props.profileInfo.lastName}
        </p>
        <p className="text-sm font-medium text-gray-900">Email: {props.profileInfo.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
