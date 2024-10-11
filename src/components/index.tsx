// File: src/components/Dashboard.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setSelectedState } from '../features/covidslice'
import StateFilter from './stateFilter';
import PieChart from './pieChart';
import LineChart from './lineChart';
import StatsSummary from './statsSummary';
import MapView from './mapComponent';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { data, selectedState } = useSelector((state: RootState) => state.covid);

  const handleStateChange = (state: string | null) => {
    dispatch(setSelectedState(state));
  };

  const filteredData = selectedState
    ? data.filter((item) => item.state === selectedState)
    : data;

  const totalStats = filteredData.reduce(
    (acc, curr) => ({
      totalCases: acc.totalCases + curr.totalCases,
      activeCases: acc.activeCases + curr.activeCases,
      recovered: acc.recovered + curr.recovered,
      deaths: acc.deaths + curr.deaths,
    }),
    { totalCases: 0, activeCases: 0, recovered: 0, deaths: 0 }
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-12">
      <div className='max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='p-6 grid gap-8 lg:p-12'>
      <h1 className='text-4xl font-bold text-center text-gray-800 col-span-full'>COVID-19 Statistics in India</h1>
      <div className='col-span-full'>
      <StateFilter
        states={data.map((item) => item.state)}
        selectedState={selectedState}
        onStateChange={handleStateChange}
      />
      </div>
      <StatsSummary stats={totalStats} />
      
      <div className="grid grid-cols-1  gap-8 col-span-full">
        <div className='bg-white p-6 rounded-lg shadow-md  flex items-center justify-center'>
        <PieChart data={totalStats} />
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md  flex items-center justify-center'>
        <LineChart data={filteredData} />
        </div>
      </div>
      <MapView data={data} selectedState={selectedState} />
      </div> 
      </div>
    </div>
  );
};

export default Dashboard;

