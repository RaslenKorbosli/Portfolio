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
      console.log(action);
      state.darkMode = action.payload;
    },
    updateName(state, fullName) {
      state.name = fullName;
    },
  },
});
export const { activatedDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
