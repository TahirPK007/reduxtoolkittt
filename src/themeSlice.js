import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  color: 'white',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload;
      console.log((state.color = action.payload));
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
