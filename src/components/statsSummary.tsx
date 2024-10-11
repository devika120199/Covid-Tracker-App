import React from 'react';

interface StatsSummaryProps {
  stats: {
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
  };
}

const StatsSummary: React.FC<StatsSummaryProps> = ({ stats }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 col-span-full'>
   
      <div className="bg-blue-100 text-blue-800 rounded-lg p-4 shadow">
        <h3 className='text-xl font-semibold mb-2'>Total Cases</h3>
        <p className='text-2xl font-bold '>{stats.totalCases.toLocaleString()}</p>
      </div>
      <div className="bg-yellow-100 text-yellow-800 rounded-lg p-4 shadow">
        <h3 className='text-xl font-semibold mb-2'>Active Cases</h3>
        <p className='text-2xl font-bold '>{stats.activeCases.toLocaleString()}</p>
      </div>
      <div className="bg-green-100 text-green-800 rounded-lg p-4 shadow">
        <h3 className='text-xl font-semibold mb-2'>Recovered</h3>
        <p className='text-2xl font-bold '>{stats.recovered.toLocaleString()}</p>
      </div>
      <div className="bg-red-100 text-red-800 rounded-lg p-4 shadow">
        <h3 className='text-xl font-semibold mb-2'>Deaths</h3>
        <p className='text-2xl font-bold '>{stats.deaths.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default StatsSummary;