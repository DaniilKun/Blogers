import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentBrandState {
  names: string[];
  brand: string[];
}

// Определите массив имен
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const initialState: CurrentBrandState = {
  names: names,
  brand: [names[0]], // Используйте первый элемент массива names
};

export const currentBrandSlice = createSlice({
  name: 'currentBrand',
  initialState,
  reducers: {
    setCurrentBrand: (state, action: PayloadAction<string[]>) => {
      state.brand = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentBrand } = currentBrandSlice.actions;

export default currentBrandSlice.reducer;
