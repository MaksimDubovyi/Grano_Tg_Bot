"use client";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appState/appSlice";

const store = configureStore({
  reducer: {
    appReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
