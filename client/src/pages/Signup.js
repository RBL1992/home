import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../images/home-logo.png';
import { useMutation } from '@apollo/client';
import { ADD_USER, ADD_HOME } from '../utils/mutations';
import Logo from '../images/home-logo.png';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    homeName: '',
    email: '',
    password: '',
    pictureUrl: '',
  });

  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [addUser] = useMutation(ADD_USER);

  // Attempting to add a home when a user is created
  const [addHome] = useMutation(ADD_HOME);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === 'profile-pic') {
      // Creating new form data for File data type
      const data = new FormData();
      data.append('file', files[0]);
      // Appending required fields for cloudinary upload
      data.append('upload_preset', 'home-upload');
      data.append('cloud_name', 'dkxi93m71');
      // Posting request to cloudinary API
      fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: 'POST',
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          setFormState({
            ...formState,
            pictureUrl: data.url,
          });
        })
        .catch((err) => console.error(err));
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      const home = await addHome({
        variables: { addHomeUserId: data.addUser.user._id, homeName: formState.homeName },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      setIsErrorMessage(true);
      setErrorMessage(() =>
        e.message.includes('E11000') ? `A user with the email address ${formState.email} already exists.` : e.message
      );
      console.error(e);
    }
  };

  return (
    <div>
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src={Logo}
            alt='Your Company'
          />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Sign Up</h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <Link
              className='font-medium text-indigo-600 hover:text-indigo-500'
              to={'/login'}>
              Log In
            </Link>
          </p>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form
              className='space-y-6'
              onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'>
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    value={formState.firstName}
                    onChange={handleChange}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'>
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    required
                    value={formState.lastName}
                    onChange={handleChange}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='homeName'
                  className='block text-sm font-medium text-gray-700'>
                  Home Name
                </label>
                <div className='mt-1'>
                  <input
                    id='homeName'
                    name='homeName'
                    type='text'
                    required
                    value={formState.homeName}
                    onChange={handleChange}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'>
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    value={formState.email}
                    onChange={handleChange}
                    onClick={() => setIsErrorMessage(false)}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    value={formState.password}
                    onChange={handleChange}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='profile-pic'
                  className='block text-sm font-medium text-gray-700'>
                  Add a profile picture
                </label>
                <div className='mt-1'>
                  <input
                    id='profile-pic'
                    name='profile-pic'
                    type='file'
                    accept='image/*'
                    multiple={false}
                    required
                    onChange={handleChange}
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
                {formState.pictureUrl !== '' && (
                  <img
                    src={formState.pictureUrl}
                    className='rounded-full mt-5 w-72 h-72 mx-auto'
                    alt='profile pic preview'
                  />
                )}
              </div>
              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                  Create Account
                </button>
              </div>
            </form>
            {isErrorMessage && <div className='my-3 p-3 bg-danger text-indigo-600 text-center'>{errorMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
