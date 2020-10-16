import React from 'react';
import { Line, LineChart, XAxis, Tooltip } from 'recharts';
import { formatTime } from '../../../../utils';

const CustomizedLabel = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor='middle'>
    {value}
  </text>
);

const CustomizedAxisTick = ({ x, y, stroke, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(-35)'>
      {payload.value}
    </text>
  </g>
);

export const Chart = ({ threeHourForcastList }) => {
  const data = threeHourForcastList.map(elem => ({
    name: formatTime(elem.dt_txt),
    Temperature: elem.main.temp,
  }));
  return (
    <LineChart
      width={1000}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <XAxis dataKey='name' height={60} tick={<CustomizedAxisTick />} />
      <Tooltip />
      <Line type='monotone' dataKey='Temperature' stroke='#8884d8' label={<CustomizedLabel />} />
    </LineChart>
  );
};
