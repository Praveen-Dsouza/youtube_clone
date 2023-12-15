import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    details: [],
    channelDetails: [],
    channelId: null,
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
  },
});

export const { addVideos, addVideoDetails, addChannelDetails, setChannnelId, clearChannelId } = videoSlice.actions;
export default videoSlice.reducer;
