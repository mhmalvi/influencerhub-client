import React from "react";

const CaseStudy = () => {
  return (
    <div className='page-width mx-auto'>
      <div className='mx-28 flex items-center'>
        <div className='w-7/12'>
          <div className='rounded-3xl'>
            <img
              className='min-w-full min-h-full rounded-3xl'
              src='https://i.ibb.co/BgHDgQJ/unsplash-bzq-U01v-G54.png'
              alt='Banner'
            />
          </div>
        </div>
        <div className='w-5/12'>
          <div className='ml-10'>
            <h3
              className='font-bold font-abhaya leading-10'
              style={{ fontSize: "25px" }}
            >
              WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN
            </h3>
            <p className='mt-6 font-light text-base leading-5 font-mulish'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
