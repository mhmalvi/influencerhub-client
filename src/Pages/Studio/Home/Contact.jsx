import React from "react";

const Contact = () => {
  return (
    <div className='page-width mx-auto py-10'>
      <div
        className='mx-28 bg-gray-100 h-40 flex justify-between items-center'
        style={{
          borderRadius: "75px",
        }}
      >
        <h1 className='w-98 text-2xl font-normal font-mulish leading-8 ml-21'>
          Find Online Learning Harvard at Shopwebly Online
        </h1>
        <div className='w-98 flex items-center mr-16'>
          <input
            className='min-w-full outline-none bg-white py-4 px-7 shadow-2xl'
            style={{ borderRadius: "60px" }}
            placeholder='Enter your email address..'
            type='text'
          />
          <button className='px-7 py-2 bg-blue-500 text-white text-2xl font-light rounded-full leading-8 font-mulish cursor-pointer -ml-24'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
