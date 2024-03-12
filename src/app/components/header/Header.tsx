"use client";
import React, { useEffect, useState } from "react";
import style from "./header.module.css";

import Image from "next/image";

const Header: React.FC = () => {
  const addToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    console.log("addToCart");
  };
  return (
    <div className={style.container}>
      <Image
        className={style.image}
        src={`https://grano.com.ua/_next/static/media/Logo.53638533.svg`}
        width={200}
        height={200}
        alt={"grano"}
        style={{ width: "100px", height: "100px" }}
        priority={true}
      />

      <button onClick={addToCart} className={style.btn}>
        <Image
          src={`/product/diagram.png`}
          width={30}
          height={30}
          alt="diagram"
          style={{ width: "25px", height: "25px" }}
        />
      </button>
    </div>
  );
};
export { Header };
