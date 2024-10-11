import React from 'react';
import Plot from 'react-plotly.js';
import { CovidData } from '../types';

interface LineChartProps {
  data: CovidData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartData = [
    {
      x: data.map((item) => item.state),
      y: data.map((item) => item.totalCases),
      type: 'scatter' as const,
      mode: 'lines+markers' as const,
      name: 'Total Cases',
    },
    {
      x: data.map((item) => item.state),
      y: data.map((item) => item.activeCases),
      type: 'scatter' as const,
      mode: 'lines+markers' as const,
      name: 'Active Cases',
    },
    {
      x: data.map((item) => item.state),
      y: data.map((item) => item.recovered),
      type: 'scatter' as const,
      mode: 'lines+markers' as const,
      name: 'Recovered',
    },
    {
      x: data.map((item) => item.state),
      y: data.map((item) => item.deaths),
      type: 'scatter' as const,
      mode: 'lines+markers' as const,
      name: 'Deaths',
    },
  ];

  const layout = {
    title: 'COVID-19 Cases by State',
    xaxis: { title: 'State' },
    yaxis: { title: 'Number of Cases' },
    height: 400,
    width: 1000,
  };

  return <Plot data={chartData} layout={layout} />;
};

export default LineChart;