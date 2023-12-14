import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./storeSlices/appSlice";
import searchSlice from "./storeSlices/searchSlice";
import chatSlice from "./storeSlices/chatSlice";
import videoSlice from "./storeSlices/videoSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        video: videoSlice
    }
})

export default store;