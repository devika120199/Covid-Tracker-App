import React from 'react';

interface StateFilterProps {
  states: string[];
  selectedState: string | null;
  onStateChange: (state: string | null) => void;
}

const StateFilter: React.FC<StateFilterProps> = ({ states, selectedState, onStateChange }) => {
  return (
   
      <select
        value={selectedState || ''}
        onChange={(e) => onStateChange(e.target.value || null)}
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none '
      >
        <option value="">All States</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    
  );
};

export default StateFilter;
