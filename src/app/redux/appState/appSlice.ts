"use client";
import { ProductType } from "../../type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataProducts } from "./dataProducts";

type App = {
  isMapPage: boolean;
  location: string;
  dataProducts: ProductType[];
  myBox: ProductType[];
};

const initialState: App = {
  isMapPage: false,
  location: "en",
  dataProducts: dataProducts,
  myBox: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addMyBox(state, action: PayloadAction<ProductType>) {
      state.myBox.push(action.payload);
    },
  },
});

export const { addMyBox } = appSlice.actions;
export default appSlice.reducer;
