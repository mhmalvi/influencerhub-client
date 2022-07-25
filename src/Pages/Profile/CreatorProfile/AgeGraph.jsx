import React from "react";
import { Bar, BarChart, LabelList, Legend, XAxis } from "recharts";

const AgeGraph = () => {
  const data = [
    {
      name: "0-13",
      Male: 150,
      Female: 190,
    },
    {
      name: "14-17",
      Male: 260,
      Female: 200,
    },
    {
      name: "18-24",
      Male: 380,
      Female: 345,
    },
    {
      name: "25-50",
      Male: 586,
      Female: 490,
    },
    {
      name: "51-70",
      Male: 890,
      Female: 480,
    },
  ];

  const totalCreator = () => {
    let total = 0;
    data.forEach((dt) => {
      total = total + dt.Male + dt.Female;
    });
    return total;
  };

  data.forEach((age) => {
    age.Percentage = `${(
      ((age.Male + age.Female) / totalCreator()) *
      100
    ).toFixed(2)}%`;
  });

  return (
    <div className="rounded-xl border border-gray-400 ml-6">
      <h2 className="text-2xl font-mulish leading-8 font-normal text-center mt-8 mb-6">
        Age
      </h2>
      <div>
        <BarChart
          width={585}
          height={280}
          data={data}
          axisLine={false}
          stackOffset="sign"
          margin={{
            top: 20,
            right: 87,
            left: 87,
            bottom: 20,
          }}
        >
          <XAxis axisLine={false} dataKey="name" />
          <Legend
            iconSize={0}
            wrapperStyle={{ fontSize: "16px", fontWeight: "600" }}
          />
          <Bar dataKey="Male" fill="#0074D1" stackId="stack" />
          <Bar dataKey="Female" fill="#D100D1" stackId="stack" radius={4}>
            <LabelList dataKey={"Percentage"} position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default AgeGraph;
