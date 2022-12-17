import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import editIcon from '../images/edit.svg';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { EDIT_FEATURE } from '../utils/mutations';
import './Modal.css';

import dayjs from 'dayjs';

const EditModal = (props) => {
  // this is for tailwind modal ui
  const [open, setOpen] = useState(false);

  //setting the state of the currently input feature
  const [feature, setFeatureState] = useState({
    featureCategory: props.feature.__typename,
    itemCategory: props.feature.itemCategory,
    room: props.feature.room,
    lastMaintenanceDate: props.feature.lastMaintenanceDate,
    nextMaintenanceDate: props.feature.nextMaintenanceDate,
    brandName: props.feature.brandName,
  });

  //this is the mutation that will run based on which feature is selected
  const [editFeature, { error }] = useMutation(EDIT_FEATURE);

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

  //used to maintain consistency in display of names
  const dropdownOption = (featureItem) => {
    if (featureItem.__typename >= 'Hvac') {
      return `HVAC`;
    } else {
      return featureItem.__typename;
    }
  };

  // when user submits the form, finds which feature was selected in drop down, and runs the proper mutation based on the switch statement
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const _id = event.target.getAttribute('data-id');
    const featureCategory = event.target.name.toLowerCase();
    console.log(_id);

    try {
      const data = await editFeature({
        variables: { _id, featureCategory, ...feature },
      });
      console.log('props.featureList: ', { ...props.featureList });
      console.log('feature: ', { ...feature });
      console.log('updated data', data.data.editFeature[featureCategory]);
      if (data) {
        props.setFeatureList(
          props.featureList.map((obj) => {
            if (obj._id === _id) {
              console.log('obj', obj);
              console.log('feature', feature);
              return { ...obj, ...data.data.editFeature[featureCategory].filter((feature) => feature._id === _id)[0] };
            }
            return obj;
          })
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex flex-row-reverse'>
      <button
        type='button'
        className='inline-flex items-center'
        onClick={() => setOpen(true)}>
        <img
          className='min-w-min h-5 w-5 flex-shrink-0 '
          src={editIcon}
          alt=''
        />
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
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6'>
                  <div>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                      <CheckIcon
                        className='h-6 w-6 text-green-600'
                        aria-hidden='true'
                      />
                    </div>

                    <div className='mt-3 text-center sm:mt-5 py-1'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'>
                        Edit your Feature
                      </Dialog.Title>
                      <div className='mt-2'>
                        <form
                          name={props.feature.__typename}
                          data-id={props.feature._id}
                          className='space-y-6 mt-8 px-5 flex flex-col items-center'
                          action='#'
                          method='PUT'
                          onSubmit={handleFormSubmit}>
                          <h2 className='text-3xl font-semibold'>{dropdownOption(props.feature)}</h2>

                          <div className='flex items-center justify-center form-row flex-wrap gap-3'>
                            <div className='labelSpacing text-right'>
                              <label htmlFor='featureName'>Feature Name:</label>
                            </div>
                            <input
                              type='text'
                              id='featureName'
                              name='itemCategory'
                              className='inputSpacing'
                              value={feature.itemCategory}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className='flex items-center justify-center form-row flex-wrap gap-3'>
                            <div className='labelSpacing text-right'>
                              <label htmlFor='room'>Room:</label>
                            </div>
                            <input
                              type='text'
                              id='room'
                              name='room'
                              className='inputSpacing'
                              value={feature.room}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className='flex items-center justify-center form-row flex-wrap gap-3'>
                            <div className='labelSpacing text-right'>
                              <label htmlFor='maintenanceDate'>Last Maintenance Date:</label>
                            </div>
                            <input
                              type='date'
                              id='maintenance'
                              name='lastMaintenanceDate'
                              className='inputSpacing'
                              value={dayjs(feature.lastMaintenanceDate).format('YYYY-MM-DD')}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className='flex items-center justify-center form-row flex-wrap gap-3'>
                            <div className='labelSpacing text-right'>
                              <label htmlFor='brandName'>Brand Name:</label>
                            </div>
                            <input
                              type='text'
                              id='brandName'
                              name='brandName'
                              className='inputSpacing'
                              value={feature.brandName}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className='mt-5 sm:mt-6'>
                            <button
                              type='submit'
                              className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              onClick={() => !error && setOpen(false)}>
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

export default EditModal;
