import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from "./subredditsSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    search: searchReducer
  },
});
