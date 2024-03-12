"use client";
import React, { useEffect, useState } from "react";
import style from "./productId.module.css";

import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getProductById } from "../../../redux/appState/appSlice";
import Image from "next/image";
import { ProductType } from "@/app/type/type";

interface Props {
  id: string;
}

const ProductId: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => {
    // Отримати потрібний об'єкт продукту за його ідентифікатором
    return state.appReducer.dataProducts.find(
      (product) => product.id === parseInt(id, 10)
    );
  });
  console.log("product", product);
  return <div></div>;
};
export { ProductId };
