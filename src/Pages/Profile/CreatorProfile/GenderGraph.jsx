import React from "react";
import { Cell, Pie, PieChart } from "recharts";

const GenderGraph = ({ data01 }) => {
  const COLORS = ["#D100D1", "#0074D1"];

  return (
    <div className="w-98 rounded-xl border border-gray-400">
      <h2 className="text-2xl font-mulish leading-8 font-normal text-center mt-8 mb-6">
        Gender
      </h2>
      <div className="flex justify-center items-center">
        <PieChart width={200} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={75}
            fill="#8884d8"
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-700"></div>
            <p className="font-mulish m-0 ml-1 text-base font-semibold leading-6 text-blue-700">
              65%
            </p>
            <p className="font-mulish m-0 ml-1 text-base font-semibold leading-6">
              Male
            </p>
          </div>
          <div className="flex items-center mt-3">
            <div className="w-3 h-3 rounded-full bg-fuchsia-700"></div>
            <p className="font-mulish m-0 ml-1 text-base font-semibold leading-6 text-fuchsia-500">
              35%
            </p>
            <p className="font-mulish m-0 ml-1 text-base font-semibold leading-6">
              Female
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderGraph;
