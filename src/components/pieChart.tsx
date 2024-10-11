import React from 'react';
import Plot from 'react-plotly.js';

interface PieChartProps {
  data: {
    activeCases: number;
    recovered: number;
    deaths: number;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const { activeCases, recovered, deaths } = data;

  const chartData = [
    {
      values: [activeCases, recovered, deaths],
      labels: ['Active Cases', 'Recovered', 'Deaths'],
      type: 'pie' as const,
      hole: 0.4,
      marker: {
        colors: ['#1e40af', '#00FF00', '#FF0000'],
      },
    },
  ];

  const layout = {
    title: 'COVID-19 Cases Distribution',
    // height: 400,
    width: 500,
  };

  return <Plot data={chartData} layout={layout} />;
};

export default PieChart;
