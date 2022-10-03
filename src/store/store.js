import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from "./subredditsSlice"; 

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer
  },
});
