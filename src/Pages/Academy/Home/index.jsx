import React from "react";
import Navbar from "../../../Components/Shared/Navbar";
import imageBg from "../../../assets/Images/academy-avatar-bg.png";

const Home = () => {
  return (
    <div className='page-width mx-auto'>
      <div>
        <Navbar loggedin={true} />
      </div>
      <div className='relative'>
        <div className='header-wrapper h-98 w-full'></div>
        <div className='h-98 w-full from-black to-transparent bg-opacity-50 bg-gradient-to-r absolute top-0'>
          <div
            className='ml-28 mt-25'
            style={{
              width: "585px",
              height: "150px",
            }}
          >
            <h1 className='text-4.5xl font-bold font-abhaya leading-12 text-white'>
              Get Results for Online Courses Uk. Find Quick Results from
              Multiple Sources
            </h1>
            <p className='text-base font-light leading-6 font-mulish text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      {/* Perfect Partner */}
      <div className='mx-28'>
        <div className='flex justify-between items-center mt-25 pt-0.5'>
          <div className='w-98'>
            <h1 className='text-2xl font-noraml leading-8 font-mulish'>
              Perfect Partner
            </h1>
            <h1
              className='font-bold font-mulish'
              style={{
                fontSize: "25px",
                lineHeight: "40px",
              }}
            >
              WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN
            </h1>
            <p className='text-base leading-5 font-light font-mulish'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </p>
          </div>
          <div className='relative'>
            <img
              className=''
              src='https://i.ibb.co/W3KJvq2/Image-Placeholder-2.jpg'
              alt=''
            />
            <img
              className='-mt-64 -ml-21'
              src='https://i.ibb.co/hZjsGh3/Image-Placeholder-1.jpg'
              alt=''
            />
            <img
              className='-mt-50 ml-0.5'
              src='https://i.ibb.co/W5TJhpY/Image-Placeholder.jpg'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='mx-28 mt-25 pt-0.5'>
        <div
          className='mx-auto'
          style={{
            width: "498px",
          }}
        >
          <h1
            className='font-bold font-mulish text-center'
            style={{
              fontSize: "25px",
              lineHeight: "40px",
            }}
          >
            WE HAVE PRIORITY FOR CAN CREATE DREAM HOME DESIGN
          </h1>
          <p className='text-base leading-5 font-light font-mulish text-center'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-12 pt-0.5'>
          <div className='w-81 bg-white shadow-md rounded-2xl'>
            <img
              className=''
              src='https://i.ibb.co/58rYxZS/Share-Image.jpg'
              alt=''
            />
            <div>
              <p className='text-base font-semibold leading-6 font-mulish px-4 py-3.5'>
                More than thousands of customizable templates with royalty-free
                music for your business
              </p>
            </div>
          </div>
          <div className='w-81 bg-white shadow-md rounded-2xl'>
            <img
              className=''
              src='https://i.ibb.co/DQ65CrG/Share-Image-1.jpg'
              alt=''
            />
            <div>
              <p className='text-base font-semibold leading-6 font-mulish px-4 py-3.5'>
                More than thousands of customizable templates with royalty-free
                music for your business
              </p>
            </div>
          </div>
          <div className='w-81 bg-white shadow-md rounded-2xl'>
            <img
              className=''
              src='https://i.ibb.co/6JPjQQL/Share-Image-2.jpg'
              alt=''
            />
            <div>
              <p className='text-base font-semibold leading-6 font-mulish px-4 py-3.5'>
                More than thousands of customizable templates with royalty-free
                music for your business
              </p>
            </div>
          </div>
        </div>
        <div className='mt-12 pt-0.5 flex items-center justify-center'>
          <button className='text-2xl leading-8 font-noraml font-mulish py-3 px-12 bg-blue-500 rounded-2xl text-white'>
            More
          </button>
        </div>
      </div>

      <div className='mx-40 mt-24 flex justify-evenly items-center'>
        <div className='relative w-1/3'>
          <div>
            <img src={imageBg} alt='' />
            <img
              className='absolute top-10 left-6'
              src='https://i.ibb.co/GWq31K2/img-8836-1.png'
              alt=''
            />
          </div>
        </div>
        <div
          className='w-2/3 ml-21'
          // style={{
          //   width: "498px",
          //   height: "161px",
          // }}
        >
          <h4
            className='font-bold leading-10'
            style={{
              fontSize: "25px",
              letterSpacing: "1px",
            }}
          >
            Find Online Learning Harvard at Shopwebly the Website to Compare
            Prices! Find and Compare Online Learning Harvard Online.
          </h4>
          <h4
            className='text-2xl font-normal font-mulish'
            style={{
              color: "#0074D1",
            }}
          >
            Rafsan Ahmed
          </h4>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-44'>
        <div className='academy-footer'>
          <div
            className='px-20 py-5 bg-white rounded mx-52 relative -top-16'
            style={{
              borderRadius: "28px",
            }}
          >
            <img
              className='px-1.5 py-0.5'
              src='https://i.ibb.co/rHT47CJ/Partner-Logo.png'
              alt=''
            />
          </div>
          <h1 className='text-3.5xl font-bold font-mulish leading-12 text-white text-center mx-72 px-1.5 -mt-8'>
            Get Results for Online Courses Uk. Find Quick Results from Multiple
            Sources. Quick Results - Search for Relevant Info & Results
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
