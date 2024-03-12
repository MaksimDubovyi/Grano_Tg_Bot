"use client";
import React from "react";
import style from "./product.module.css";
import Image from "next/image";
import { ProductType } from "../../type/type";
import { addMyBox } from "../../redux/appState/appSlice";
import { useAppDispatch } from "../../redux/hook";
const Product: React.FC<ProductType> = ({ id, title, price, img }) => {
  const dispatch = useAppDispatch();

  const handleClickRouter = () => {
    const newTabUrl = `/${id}`;
    window.open(newTabUrl, "_blank");
  };
  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const item: ProductType = {
      id,
      title,
      price,
      img,
    };
    dispatch(addMyBox(item));
    console.log("addToCart", title);
  };
  return (
    <div className={style.container} onClick={handleClickRouter}>
      <Image
        className={style.image}
        src={`/product/${img}`}
        width={200}
        height={200}
        alt={`product ${img}`}
        style={{ width: "100px", height: "100px" }}
        priority={true}
      />
      <p className={style.p}>{title}</p>
      <p className={style.p}>{price} грн</p>
      <button onClick={addToCart} className={style.btn}>
        Додати до кошика
        <Image
          src={`/product/diagram.png`}
          width={20}
          height={20}
          alt="diagram"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};
export { Product };
