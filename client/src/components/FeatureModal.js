import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_FEATURE, EARN_POINTS } from '../utils/mutations';

import Auth from '../utils/auth';

const FeatureModal = (props) => {
  // array of features for dropdown menu rendered in JSX - ADD NEW FEATURES DIRECTLY HERE
  const featuresArr = ['Filter', 'Alarm', 'HVAC', 'Gutter'];

  // this is for tailwind modal ui
  const [open, setOpen] = useState(false);

  //setting the state of the currently input feature
  const [feature, setFeatureState] = useState({
    featureCategory: 'Filter',
    itemCategory: '',
    room: '',
    lastMaintenanceDate: '',
    nextMaintenanceDate: '',
    brandName: '',
  });

  //these are the mutations that will run based on which feature is selected
  const [addFeature, { error }] = useMutation(ADD_FEATURE);
  const [addPoints, { error5 }] = useMutation(EARN_POINTS);

  // this updates the state of the feature form when user is typing in active input field
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFeatureState({
      ...feature,
      [name]: value,
    });
  };

  // querying the current user that is logged in
  const { loading, data } = useQuery(QUERY_ME);
  const userId = data.me.userId;

  // when user submits the form, finds which feature was selected in drop down, and runs the proper mutation based on the switch statement
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // user earns points when they submit a new feature
    try {
      const data = await addPoints({
        variables: { userId },
      });
    } catch (err) {
      console.error(err);
    }

    // add feature depending on which feature category is selected
    try {
      const data = await addFeature({
        variables: { userId, ...feature },
      });

      if (data) {
        const featureCategory = feature.featureCategory.toLowerCase();
        props.setFeatureList([...props.featureList, data.data.addFeatureToHome[featureCategory].pop()]);
      }
      setFeatureState('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        type='button'
        className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        id='feature-btn'
        onClick={() => setOpen(true)}>
        Add Feature
      </button>
      <Transition.Root
        show={open}
        as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                  <div>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                      <CheckIcon
                        className='h-6 w-6 text-green-600'
                        aria-hidden='true'
                      />
                    </div>

                    <div className='mt-3 text-center sm:mt-5'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'>
                        Add your Feature
                      </Dialog.Title>
                      <div className='mt-2'>
                        <form
                          className='space-y-6'
                          action='#'
                          method='PUT'
                          onSubmit={handleFormSubmit}>
                          <label htmlFor='featureCategory'>Feature</label>
                          <select
                            id='featureCategory'
                            name='featureCategory'
                            onChange={handleChange}>
                            {featuresArr.map((feature) => (
                              <option>{feature}</option>
                            ))}
                          </select>
                          <br />

                          <label htmlFor='featureName'>Feature Name:</label>
                          <input
                            type='text'
                            id='featureName'
                            name='itemCategory'
                            onChange={handleChange}
                            required
                          />
                          <br />

                          <label htmlFor='room'>Room:</label>
                          <input
                            type='text'
                            id='room'
                            name='room'
                            onChange={handleChange}
                            required
                          />
                          <br />

                          <label htmlFor='maintenanceDate'>Last Maintenance Date:</label>
                          <input
                            type='date'
                            id='maintenance'
                            name='lastMaintenanceDate'
                            onChange={handleChange}
                            required
                          />
                          <br />

                          <label htmlFor='brandName'>Brand Name:</label>
                          <input
                            type='text'
                            id='brandName'
                            name='brandName'
                            onChange={handleChange}
                            required
                          />
                          <br />
                          <div className='mt-5 sm:mt-6'>
                            <button
                              type='submit'
                              className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              onClick={() => setOpen(false)}>
                              All Done
                            </button>
                          </div>
                          {error && <div className='col-12 my-3 bg-danger text-white p-3'>{error.message}</div>}
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default FeatureModal;
