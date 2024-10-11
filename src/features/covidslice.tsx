import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CovidData } from '../types';
import { mockData } from '../utils/mockData';

interface CovidState {
  data: CovidData[];
  selectedState: string | null;
}

const initialState: CovidState = {
  data: mockData,
  selectedState: null,
};

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setSelectedState: (state, action: PayloadAction<string | null>) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState } = covidSlice.actions;
export default covidSlice.reducer;
