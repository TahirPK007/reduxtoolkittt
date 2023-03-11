import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../src/counterSlice';
import themeSlice from '../src/themeSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
  },
});
