import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer/buttonReducer";
export const store = configureStore({
    reducer:reducer
})