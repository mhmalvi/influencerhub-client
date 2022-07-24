import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  Line,
  Legend,
} from "recharts";
import Navbar from "../../../Components/Shared/Navbar";

const CreatorProfile = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //   const options = {
  //     title: "Company Performance",
  //     curveType: "function",
  //     legend: { position: "bottom" },
  //     animation: { startup: true, duration: 2000, easing: "out" },
  //   };

  return (
    <div className='page-width mx-auto font-mulish'>
      <div className='ml-4'>
        <Navbar loggedin={true} />
      </div>
      <div className='px-30 flex justify-center'>
        <div className='w-81 felx justify-center items-start shadow rounded-3xl px-3.5 pb-10 pt-4 bg-dark-gray text-white'>
          <div className='flex flex-col justify-center items-center'>
            <img
              className='rounded-2xl h-25'
              src='https://i.ibb.co/k6kMjq0/Rectangle-6611.jpg'
              alt=''
            />
            <img
              className='w-19 h-19 rounded-full -mt-9'
              src='https://i.ibb.co/HFNyMtV/Rectangle-6614.png'
              alt=''
            />
          </div>
          <div className='ml-8 mt-8'>
            <div>
              <h2 className='text-white font-mulish font-normal text-2xl leading-8'>
                Nick Jhonas
              </h2>
              <h4 className='text-white font-mulish font-light text-base leading-5'>
                Dhaka, Bangladesh
              </h4>
            </div>
            <div className='mt-4'>
              <p className='font-mulish font-light text-xs leading-5 mb-1'>
                Catagory
              </p>
              <div className='flex flex-wrap'>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Food
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Shop
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Sports
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Dance
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Shop
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6 mr-2'>
                  Sports
                </h4>
                <h4 className='text-white font-mulish font-normal text-base leading-6'>
                  Dance
                </h4>
              </div>
            </div>

            <div className='mt-4'>
              <p className='font-mulish font-light text-xs leading-5 mb-1'>
                Biography
              </p>
              <h4 className='text-white font-mulish font-light text-sm leading-4 mr-10'>
                Get the best Results for Learning Management System Uk. Find
                what you are looking for! 99% Match on Learning Management
                System Uk.
              </h4>
            </div>
          </div>
        </div>
        <div className='ml-6'>
          <div>
            <div className='whitespace-nowrap'>
              <button className='w-38 py-2.5 rounded-xl border-4 border-white shadow-xl text-center bg-dark-blue text-white text-2xl font-abhaya font-bold leading-10'>
                Facebook
              </button>
              <button className='w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6'>
                Youtube
              </button>
              <button className='w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6'>
                TikTok
              </button>
              <button className='w-38 py-2.5 rounded-xl border-2 border-white text-center bg-dark-blue bg-opacity-75 text-white text-2xl font-abhaya font-bold leading-10 ml-6'>
                Instagram
              </button>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-12'>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  50,000
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Follower
                </p>
              </div>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  25,50,000
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Like
                </p>
              </div>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  25,50,000
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Comment
                </p>
              </div>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  25,50,000
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Share
                </p>
              </div>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  25,50,000
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Views
                </p>
              </div>
              <div className='w-38 rounded-xl border-gray-400 py-5 mt-0 px-6 flex flex-col justify-center items-center border'>
                <h4 className='font-mulish font-semibold text-base leading-5'>
                  20%
                </h4>
                <p className='font-mulish font-light text-base leading-5 mb-0'>
                  Engagement
                </p>
              </div>
            </div>
            <div className='flex justify-between items-start px-16 py-10 border rounded-xl border-gray-400 mt-12'>
              <div className='relative w-50 h-50 flex justify-center items-center'>
                <div className='avatar-bg absolute rotate w-50 h-50 z-0 flex justify-center items-center'></div>
                <div className=' flex justify-center items-center z-50'>
                  <img
                    className='w-16 h-16 rounded-full'
                    src='https://i.ibb.co/HFNyMtV/Rectangle-6614.png'
                    alt=''
                  />
                </div>
              </div>
              <div>
                <h2 className='font-mulish font-normal text-2xl leading-8'>
                  Average Performance
                </h2>
                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <div className='flex items-center'>
                      <div className='w-2.5 h-2.5 rounded-full bg-violet-700'></div>
                      <p className='font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal'>
                        Likes
                      </p>
                    </div>
                    <h4 className='font-mulish font-bold text-lg leading-6 mt-2'>
                      10000
                    </h4>
                  </div>

                  <div>
                    <div className='flex items-center'>
                      <div className='w-2.5 h-2.5 rounded-full bg-blue-700'></div>
                      <p className='font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal'>
                        Share
                      </p>
                    </div>
                    <h4 className='font-mulish font-bold text-lg leading-6 mt-2'>
                      10000
                    </h4>
                  </div>

                  <div>
                    <div className='flex items-center'>
                      <div className='w-2.5 h-2.5 rounded-full bg-orange-700'></div>
                      <p className='font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal'>
                        Views
                      </p>
                    </div>
                    <h4 className='font-mulish font-bold text-lg leading-6 mt-2'>
                      300000
                    </h4>
                  </div>

                  <div>
                    <div className='flex items-center'>
                      <div className='w-2.5 h-2.5 rounded-full bg-fuchsia-700'></div>
                      <p className='font-mulish m-0 ml-2 text-sm text-light-gray text-opacity-75 font-normal'>
                        Comment
                      </p>
                    </div>
                    <h4 className='font-mulish font-bold text-lg leading-6 mt-2'>
                      5000
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <LineChart
          width={1000}
          height={500}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend layout='vetical' verticalAlign='top' align='right'  />
          <Line
            activeDot={{ color: "#FFFFFF", r: 7, cursor: "pointer" }}
            dot={false}
            strokeWidth={4}
            axisLine={false}
            type='monotone'
            dataKey='pv'
            stroke='#0074D1'
          />
          <Line
            dot={false}
            strokeWidth={4}
            axisLine={false}
            type='monotone'
            dataKey='uv'
            stroke='#D100D1'
          />
        </LineChart>
      </div>
    </div>
  );
};

export default CreatorProfile;
