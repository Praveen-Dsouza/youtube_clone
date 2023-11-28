import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./storeSlices/appSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
    }
})

export default store;