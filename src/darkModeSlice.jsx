import { createSlice } from '@reduxjs/toolkit';
import {} from 'react';
const initialState = {
  darkMode:
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    activatedDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});
export const { activatedDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
