import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./storeSlices/appSlice";
import searchSlice from "./storeSlices/searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice
    }
})

export default store;