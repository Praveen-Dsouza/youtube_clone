import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    details: [],
    channelId: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload
    },
    addVideoDetails: (state, action) => {
      state.details = action.payload
    },
    setChannnelId: (state, action) => {
      state.channelId = action.payload;
    },
    clearChannelId: (state) => {
      state.channelId = null;
    },
  },
});

export const { addVideos, addVideoDetails, setChannnelId, clearChannelId } = videoSlice.actions;
export default videoSlice.reducer;
