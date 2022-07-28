import React from "react";
import Icons from "../../../Components/Shared/Icons";

const SocialSetiing = () => {
  return (
    <div>
      <h1 className='text-gray-600 text-3.5xl font-bold leading-10 pl-16'>
        Social Field
      </h1>
      <div className='flex'>
        <div className='text-base font-semibold leading-6 flex flex-col justify-evenly items-end text-black'>
          <div className='flex items-center my-2'>
            <h4 className='whitespace-nowrap'>Social Media link</h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
          <div className='flex items-center my-2'>
            <h4 className='whitespace-nowrap'>Add to web Link </h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
          <div className='flex items-center my-2'>
            <h4>Category</h4>
            <h6 className='ml-7 mr-20'>:</h6>
          </div>
        </div>

        <div className='flex flex-col justify-evenly text-base font-semibold items-start text-gray-500'>
          <div className='my-2 flex justify-between items-center'>
            <h4>kevbkfgiluasghuofe</h4>
          </div>
          <div className='my-2'>
            <h4 className='whitespace-nowrap'>oleryhg.com</h4>
          </div>
          <div className='my-2'>
            <h4>Food</h4>
          </div>
        </div>

        <div className='ml-16 flex flex-col justify-evenly text-base font-semibold items-start text-gray-500'>
          <div className='my-2 flex justify-between items-center'>
            <div>
              <Icons.PlusSquare className='cursor-pointer' />
            </div>
          </div>
          <div className='my-2'>
            <div>
              <Icons.PlusSquare className='cursor-pointer' />
            </div>
          </div>
          <div className='my-2'>
            <div>
              <Icons.PlusSquare className='cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      <div className='float-right'>
        <button className='px-14 py-2 mt-8 mr-16 text-sm font-normal rounded-xl bg-dark-blue text-white flex justify-center items-center'>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SocialSetiing;
