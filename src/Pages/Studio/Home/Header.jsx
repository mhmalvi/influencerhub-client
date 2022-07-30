import React from "react";

const Header = () => {
  return (
    <div className='relative flex justify-end items-center mb-36'>
      <div className='header-width mx-auto py-20'>
        <div className='w-6/12 mr-auto'>
          <div>
            <h1 className='text-4.5xl font-bold font-abhaya leading-12 pr-10'>
              Get Results for Online Courses Uk.
            </h1>
          </div>
          <div>
            <h4 className='font-mulish font-normal text-base leading-6 pr-24 mt-5'>
              Leading digital agency solid design and development expertise. We
              build readymade websites, mobile applications, and elaborate
              online business services.
            </h4>
          </div>
          <div className='mt-9 font-mulish'>
            <button className='px-9 py-3 bg-blue-500 text-white font-light text-2xl leading-8 font-mulish rounded-2xl cursor-pointer mr-6'>
              <span className='px-0.5'>Contact</span>
            </button>
          </div>
        </div>
        <div className='w-1/2'></div>
      </div>

      <div className='absolute right-0 top-0 rounded-tl-3xl rounded-bl-3xl'>
        <img
          className='header-banner rounded-tl-3xl rounded-bl-3xl'
          src='https://i.ibb.co/BVBKG3S/image-8.jpg'
          alt='Banner'
        />
      </div>
    </div>
  );
};

export default Header;
