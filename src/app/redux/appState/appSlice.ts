"use client";
import { ProductType } from "@/app/type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataProducts } from "./dataProducts";

type App = {
  isMapPage: boolean;
  location: string;
  dataProducts: ProductType[];
};

const initialState: App = {
  isMapPage: false,
  location: "en",
  dataProducts: dataProducts,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getProductById(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.dataProducts.find((product) => product.id === productId);
    },
  },
});

export const { getProductById } = appSlice.actions;
export default appSlice.reducer;
