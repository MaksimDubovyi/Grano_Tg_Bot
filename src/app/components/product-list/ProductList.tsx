"use client";
import React from "react";
import { Product } from "../product/Product";
import style from "./productList.module.css";
import { ProductType } from "../../type/type";

interface ProductListProps {
  data: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <div className={style.container}>
      {data &&
        data.map((item) => (
          <Product
            key={item.id + item.img}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
    </div>
  );
};
export { ProductList };
