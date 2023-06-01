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
    User: 100,
    Guest: 425,
    amt: 100
  },
  {
    name: "Week 2",
    User: 300,
    Guest: 150,
    amt: 200
  },
  {
    name: "Week 3",
    User: 200,
    Guest: 180,
    amt: 300
  },
  {
    name: "Week 4",
    User: 270,
    Guest: 500,
    amt: 400
  }
];

const Graph = ()  => {
  return (
    <div className="line-chart">
      <LineChart className="linechart"
        width={900}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 15
        }}
      >
        {/* //<CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Guest"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="User" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default Graph;