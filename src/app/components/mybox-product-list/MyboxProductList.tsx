"use client";
import React, { useEffect, useState } from "react";
import style from "./myboxProductList.module.css";
import Image from "next/image";
import { ProductType } from "../../type/type";
import { deleteFromMyBox } from "../../redux/appState/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

interface ProductTypeCount {
  productType: ProductType;
  count: number;
}

const MyboxProductList: React.FC = () => {
  const { myBox } = useAppSelector((state) => state.appReducer);
  const [state, setState] = useState<ProductTypeCount[]>([]);
  const [sum, setSum] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let totalSum = 0;
    for (let i = 0; i < myBox.length; i++) {
      totalSum += myBox[i].price;
    }
    setSum(totalSum);
  }, [myBox]);

  useEffect(() => {
    const itemCounts: { [key: number]: number } = {};
    myBox.forEach((product: ProductType) => {
      const productId = parseInt(product.id.toString(), 10);
      if (itemCounts[productId]) {
        itemCounts[productId]++;
      } else {
        itemCounts[productId] = 1;
      }
    });

    const newState: ProductTypeCount[] = [];
    myBox.forEach((product: ProductType) => {
      const productId = parseInt(product.id.toString(), 10);
      if (!newState.find((item) => item.productType.id === productId)) {
        newState.push({
          productType: product,
          count: itemCounts[productId] || 0,
        });
      }
    });

    setState(newState);
  }, [myBox]);

  const handleDelete = (productId: number) => {
    const updatedState = state.map((item) => {
      if (item.productType.id === productId) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    const filteredState = updatedState.filter((item) => item.count > 0);
    setState(filteredState);
    dispatch(deleteFromMyBox(productId));
  };
  return (
    <div className={style.container}>
      <a href="https://t.me/Grano_Assistant_Bot" target="_blank">
        Перейти в бота в Telegram
      </a>{" "}
      <h2>Корзина</h2>
      <div className={style.containerMain}>
        <h4>Ваш вибір:</h4>
        {state.map((item) => (
          <div
            key={item.productType.img + item.productType.id}
            className={style.item}
          >
            <Image
              className={style.image}
              src={`/product/${item.productType.img}`}
              width={200}
              height={200}
              alt={`product ${item.productType.img}`}
              style={{ width: "150px", height: "50px" }}
              priority={true}
            />
            <div className={style.pDiv}>
              <p className={style.p}>{item.productType.title}</p>
              <p className={style.p}>Кількість: {item.count}</p>
            </div>

            <button
              className={style.btn}
              onClick={() => handleDelete(item.productType.id)}
            >
              видалити
            </button>
          </div>
        ))}
        <h5>До сплати: {sum}</h5>
      </div>
    </div>
  );
};
export { MyboxProductList };
