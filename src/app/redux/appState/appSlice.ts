"use client";
import { ProductType } from "../../type/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataProducts } from "./dataProducts";

type App = {
  dataProducts: ProductType[];
  myBox: ProductType[];
};

const initialState: App = {
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
    deleteFromMyBox(state, action: PayloadAction<number>) {
      const index = state.myBox.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.myBox.splice(index, 1);
      }
    },
  },
});

export const { addMyBox, deleteFromMyBox } = appSlice.actions;
export default appSlice.reducer;
