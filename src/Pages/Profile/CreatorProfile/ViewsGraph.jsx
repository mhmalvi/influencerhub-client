import React from "react";
import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const ViewsGraph = ({ data }) => {
  return (
    <div className="mt-14 mx-30 rounded-xl border border-gray-300">
      <div className="flex items-center justify-between mx-8 mt-8">
        <h2 className="text-2xl font-mulish leading-8 font-normal">
          Views preview
        </h2>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-700"></div>
            <p className="font-mulish m-0 ml-1 text-sm text-light-gray text-opacity-75 font-normal">
              Views
            </p>
          </div>
          <div className="flex items-center ml-6">
            <div className="w-3 h-3 rounded-full bg-fuchsia-700"></div>
            <p className="font-mulish m-0 ml-1 text-sm text-light-gray text-opacity-75 font-normal">
              Posts
            </p>
          </div>
        </div>
      </div>
      <LineChart
        width={1020}
        height={407}
        data={data}
        margin={{ top: 50, right: 40, left: 20, bottom: 5 }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" tick={false}  />
        <YAxis axisLine={false} />
        <Tooltip content={<CustomToolTipViewsGraph />} />

        <Line
          activeDot={{ color: "#FFFFFF", r: 7, cursor: "pointer" }}
          dot={false}
          strokeWidth={4}
          axisLine={false}
          type="monotone"
          dataKey="Views"
          stroke="#0074D1"
          label={"SS"}
          style={{
            filter: `drop-shadow(0px 6px 5px #063a63)`,
          }}
        />
        <Line
          activeDot={{ color: "#FFFFFF", r: 7, cursor: "pointer" }}
          dot={false}
          strokeWidth={4}
          axisLine={false}
          type="monotone"
          dataKey="Posts"
          stroke="#D100D1"
          style={{
            filter: `drop-shadow(0px 6px 5px #4d054d`,
          }}
        />
      </LineChart>
    </div>
  );
};

const CustomToolTipViewsGraph = ({ payload, label, active }) => {
  if (active) {
    return (
      <div className="graph-toolkit-wrap relative -top-28 -left-22">
        <div className="bg-white px-6 pt-3 pb-9 rounded-md graph-toolkit">
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-700"></div>
            <div className="label ml-2">{payload[0]?.value}</div>
          </div>
          <div className="flex items-center text-sm font-normal leading-5 font-mulish">
            <div className="w-2.5 h-2.5 rounded-full bg-fuchsia-700"></div>
            <div className="label ml-2 ">{payload[1]?.value} New Post</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ViewsGraph;
