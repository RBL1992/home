import React from "react";
import UserInfo from '../components/userInfo';
import '../Profile.css';

const styles = {

};

function Profile() {
  return (
    <div className="flex flex-row justify-center align-center">
      <UserInfo
        userName='Jackson'
        userEmail='jacksonTest@email.com'
        userPhone='123-456-7890'
      />
    </div>
  );
}

export default Profile;