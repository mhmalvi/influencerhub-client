import { Dropdown, Menu, Space } from "antd";
import React from "react";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Icons from "../../../Components/Shared/Icons";

const FollowersGraph = ({ data }) => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div className='text-base font-mulish leading-6 font-semibold'>
              Monthly
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className='text-base font-mulish leading-6 font-semibold'>
              Yearly
            </div>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className='mx-30 flex justify-center py-14'>
      <div className='rounded-xl border border-gray-300'>
        <div className='w-full flex justify-between items-start px-6 my-10'>
          <h2 className='text-2xl font-mulish leading-8 font-normal'>
            Follower tendency
          </h2>
          <div className='mr-10 z-50'>
            <Dropdown className='py-2' overlay={menu} trigger={["click"]}>
              <a
                className='text-black hover:text-black'
                href='/'
                onClick={(e) => e.preventDefault()}
              >
                <Space className='px-6 py-3 flex justify-between items-center pb-2 rounded-xl bg-gray-100 text-base font-mulish leading-6 font-semibold'>
                  <p className='m-0'>Weekly</p>
                  <Icons.DownArror className='ml-auto font-bold text-black' />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <LineChart
          width={759}
          height={315}
          data={data}
          margin={{ top: 5, right: 40, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey='name' axisLine={false} tick={false} />
          <YAxis axisLine={false} />
          <Tooltip
            content={<CustomToolTipFollowerGraph />}
            position={(150, 150)}
          />
          <Line
            activeDot={{ r: 7, cursor: "pointer" }}
            dot={false}
            strokeWidth={2}
            axisLine={false}
            type='monotone'
            dataKey='Views'
            stroke='#0074D1'
          />
        </LineChart>
      </div>
      <div className='w-59 ml-6'>
        <div className='p-8 rounded-xl border border-gray-400 mb-6'>
          <h4 className='text-sm leading-5 font-normal font-mulish'>
            #Popular Tags
          </h4>
          <h4 className='text-base leading-6 font-semibold font-mulish'>
            #Burger
          </h4>
          <h4 className='text-base leading-6 font-semibold font-mulish'>
            #Pizza
          </h4>
          <h4 className='text-base leading-6 font-semibold font-mulish'>
            #Mango
          </h4>
          <h4 className='text-base leading-6 font-semibold font-mulish'>
            #Coke
          </h4>
          <h4 className='text-base leading-6 font-semibold font-mulish'>
            #Fruit
          </h4>
        </div>
        <div className='p-8 rounded-xl border border-gray-400'>
          <p className='text-sm leading-5 font-normal font-mulish'>Lead</p>
          <div>
            <div className='flex items-center'>
              <h4 className='text-base leading-6 font-semibold font-mulish text-blue-700'>
                80%
              </h4>
              <h4 className='text-base leading-6 font-semibold font-mulish ml-6'>
                Organik
              </h4>
            </div>
            <div className='flex items-center'>
              <h4 className='text-base leading-6 font-semibold font-mulish text-fuchsia-700'>
                20%
              </h4>
              <h4 className='text-base leading-6 font-semibold font-mulish ml-6'>
                Sponsor
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomToolTipFollowerGraph = ({ payload, label, active }) => {
  if (active) {
    return (
      <div className='graph-toolkit-wrap relative -top-20 -left-15'>
        <div className='flex items-center bg-white px-6 pt-3 pb-6 rounded-md graph-toolkit'>
          <div className='w-2.5 h-2.5 rounded-full bg-blue-700'></div>
          <div className='label ml-2'>{payload[0]?.value}</div>
        </div>
      </div>
    );
  }
};

export default FollowersGraph;
