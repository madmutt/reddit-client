import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = 'https://www.reddit.com';
export const loadSubreddits = createAsyncThunk(
  "subreddits/getAllSubreddits",
  async (subject) => {
      const data = [];
      const response = await fetch(`${base_URL}/subreddits/search.json?q=${subject}`);
      const json = await response.json();
      json.data.children.map((subreddit) => subreddit.data).map(subr => data.push({id: subr.id, url: subr.url, icon: subr.community_icon.length > 0 ? subr.community_icon.split("?")[0] : "https://loremflickr.com/32/32", text: subr.display_name}));

      return data;
    }
);

export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [loadSubreddits.pending]: (state, action) => {
          state.isLoading = true;
          state.hasError = false;
        },
        [loadSubreddits.fulfilled]: (state, action) => {
          state.subreddits = action.payload;
          state.isLoading = false;
          state.hasError = false;
        },
        [loadSubreddits.rejected]: (state, action) => {
          state.isLoading = false;
          state.hasError = true;
        },
    }
});

export default subredditsSlice.reducer;
