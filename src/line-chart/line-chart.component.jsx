import React from "react";
import './line-chart.styles.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 100,
    pv: 425,
    amt: 100
  },
  {
    name: "Week 2",
    uv: 300,
    pv: 150,
    amt: 200
  },
  {
    name: "Week 3",
    uv: 200,
    pv: 180,
    amt: 300
  },
  {
    name: "Week 4",
    uv: 270,
    pv: 500,
    amt: 400
  }
];

const Graph = ()  => {
  return (
    <div className="line-chart">
      <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* //<CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>
  );
}

export default Graph;