import React from 'react';
// import { UserIcon } from '@heroicons/react/24/solid';

const UserProfile = (props) => {
  return (
    <div className='grid grid-cols-2 place-items-center'>
      <div className='pr-0 place-self-auto'>
        <img
          src={props.profileInfo.pictureUrl ? props.profileInfo.pictureUrl : ''}
          className='text-violet-700 w-32 h-32 rounded-full'
          alt='profile picture'
        />
      </div>
      <div
        className='flex flex-col my-6 text-sm font-medium text-gray-900 pr-6 
        lg:text-lg text-left place-self-start'>
        <p>First Name: {props.profileInfo.firstName}</p>
        <p>Last Name: {props.profileInfo.lastName}</p>
        <p>Email: {props.profileInfo.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
