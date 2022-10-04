import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from "./subredditsSlice";
import searchReducer from "./searchSlice";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    search: searchReducer,
    posts: postsReducer
  },
});
