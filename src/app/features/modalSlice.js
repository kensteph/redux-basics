import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isOpen: false,
};
// Create aour slice
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
      state.isOpen = true;
    },
    hide: (state) => {
      state.isOpen = false;
    },
  },
});

// Export the actions
export const { show, hide } = modalSlice.actions;
// Export the reducer
export default modalSlice.reducer;
