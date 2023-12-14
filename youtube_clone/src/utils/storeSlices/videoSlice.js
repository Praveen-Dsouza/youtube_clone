import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videos: [],
    channelId: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload
    },
    setChannnelId: (state, action) => {
      state.channelId = action.payload;
    },
    clearChannelId: (state) => {
      state.channelId = null;
    },
  },
});

export const { addVideos, setChannnelId, clearChannelId } = videoSlice.actions;
export default videoSlice.reducer;
