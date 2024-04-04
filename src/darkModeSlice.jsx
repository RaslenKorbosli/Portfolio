import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  name: 'raslen',
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
