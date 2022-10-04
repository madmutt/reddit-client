import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_URL = 'https://www.reddit.com';
export const loadPosts = createAsyncThunk(
    "posts/getAllposts",
    async (subreddit) => {
        if(subreddit === ''){
            return [];
        }
        const data = [];
        const response = await fetch(`${base_URL}${subreddit}.json`);
        const json = await response.json();
        json.data.children.map((post) => post.data).map(post => data.push({id: post.id, title: post.title, created: post.created, content: post.selftext, img: post.url, num_ups: post.ups, num_comments: post.num_comments, permalink: post.permalink}));

        return data;
    }
);

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        photos: [],
        error: false,
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            //state.photos = action.payload.map(post => post.img);
            const photos = action.payload.map(post => post.img.match(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi) ? post.img : null);
            state.photos = photos.filter(element => {
                              return element !== null;
                            });
            state.isLoading = false;
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

export default postsSlice.reducer;
