import React from "react";


const UserProfile = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <div
        className="flex flex-col justify-center align-center mt-6 text-sm font-medium text-gray-900 px-6"
      >
        <p>
          First Name: {props.profileInfo.firstName}
        </p>
        <p>
          Last Name: {props.profileInfo.lastName}
        </p>
        <p>Email: {props.profileInfo.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
