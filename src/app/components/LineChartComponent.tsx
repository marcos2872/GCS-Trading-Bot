'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  dataKey: string;
  lineDataKey: string;
}

const LineChartComponent: React.FC<LineChartProps> = ({ data, dataKey, lineDataKey }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a" />
        <XAxis dataKey={dataKey} stroke="#9a9a4a" />
        <YAxis stroke="#9a9a4a" />
        <Tooltip
          contentStyle={{ backgroundColor: '#333', border: 'none' }}
          labelStyle={{ color: '#fff' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line type="monotone" dataKey={lineDataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
