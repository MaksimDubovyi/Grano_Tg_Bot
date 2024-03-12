"use client";
import React, { useEffect, useState } from "react";
import style from "./product.module.css";

import Image from "next/image";
import { ProductType } from "@/app/type/type";

const Product: React.FC<ProductType> = ({ id, title, price, img }) => {
  const handleClickRouter = () => {
    const newTabUrl = `/${id}`;
    window.open(newTabUrl, "_blank");
  };
  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    console.log("addToCart", title);
  };
  return (
    <div className={style.container} onClick={handleClickRouter}>
      <Image
        className={style.image}
        src={`/product/${img}`}
        width={100}
        height={100}
        alt="Picture of the author"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />
      <p className={style.p}>{title}</p>
      <p className={style.p}>{price} грн</p>
      <button onClick={addToCart} className={style.btn}>
        Додати до кошика
        <Image
          className={style.imageBtn}
          src={`/product/diagram.png`}
          width={20}
          height={20}
          alt="Picture of the author"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </button>
    </div>
  );
};
export { Product };