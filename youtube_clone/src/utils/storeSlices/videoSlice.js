import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    details: [],
    channelDetails: [],
    channelId: null,
    comments: []
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload
    },
    addVideoDetails: (state, action) => {
      state.details = action.payload
    },
    addChannelDetails: (state, action) => {
      state.channelDetails = action.payload
    },
    setChannnelId: (state, action) => {
      state.channelId = action.payload;
    },
    clearChannelId: (state) => {
      state.channelId = null;
    },
    addVideoComments: (state, action) => {
      state.comments = action.payload;
    }
  },
});

export const { addVideos, addVideoDetails, addChannelDetails, setChannnelId, clearChannelId, addVideoComments } = videoSlice.actions;
export default videoSlice.reducer;
