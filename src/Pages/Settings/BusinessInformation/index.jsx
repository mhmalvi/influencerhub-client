import React from "react";
import Icons from "../../../Components/Shared/Icons";

const BusinessInformation = () => {
  return (
    <div>
      <h1 className='text-gray-600 text-3.5xl font-bold leading-10 pl-16 whitespace-nowrap'>
        Business Information
      </h1>
      <div className='flex'>
        <div className='text-base font-semibold leading-6 flex flex-col justify-evenly items-end text-black'>
          <div className='flex items-center my-2'>
            <h4 className='whitespace-nowrap'>Business Name</h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
          <div className='flex items-center my-2'>
            <h4 className='whitespace-nowrap'>Phone </h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
          <div className='flex items-center my-2'>
            <h4>Adress</h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
          <div className='flex items-center my-2'>
            <h4>Language</h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
        </div>

        <div className='flex flex-col justify-evenly text-base font-semibold items-start text-gray-500'>
          <div className='my-2 flex justify-between items-center'>
            <h4>Pathao</h4>
          </div>
          <div className='my-2'>
            <h4 className='whitespace-nowrap'>0191456358952</h4>
          </div>
          <div className='my-2'>
            <h4>East Weast Right turn Dhaka Bangladesh</h4>
          </div>
          <div className='my-2 flex items-center'>
            <h4>English</h4>
            <Icons.PlusCircle className='cursor-pointer ml-24' />
          </div>
        </div>
      </div>
      <div className='float-right'>
        <button className='px-14 py-2 mt-8 mr-4 text-sm font-normal rounded-xl bg-dark-blue text-white flex justify-center items-center'>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BusinessInformation;
