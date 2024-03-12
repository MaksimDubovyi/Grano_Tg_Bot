"use client";
import React from "react";
import style from "./productId.module.css";
import { useAppSelector } from "../../../redux/hook";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
}

const ProductId: React.FC<Props> = ({ id }) => {
  const product = useAppSelector((state) => {
    return state.appReducer.dataProducts.find(
      (product) => product.id === parseInt(id, 10)
    );
  });

  return (
    <div>
      <div className={style.containerMain}>
        <Link rel="stylesheet" href="/" className={style.btn}>
          <Image
            className={style.image}
            src={`https://grano.com.ua/_next/static/media/Logo.53638533.svg`}
            width={200}
            height={200}
            alt={"grano"}
            style={{ width: "100px", height: "100px" }}
            priority={true}
          />
        </Link>
        {product && (
          <div className={style.container}>
            <h1>{product.title}</h1>
            <Image
              className={style.image}
              src={`/product/${product.img}`}
              width={600}
              height={300}
              alt={`product ${product.img}`}
              style={{ width: "550px", height: "200px" }}
              priority={true}
            />

            <p className={style.p}>{product.price} грн</p>
            <p>
              Зерно є основним продуктом харчування людини, сировиною для
              багатьох галузей промисловості і цінним кормом для тваринництва.
              Провідне місце серед посівів (до половини площ) займають зернові
              культури. Основними зонами виробництва зерна в Україні є степова і
              лісостепова зони, що виробляють по 45% і 40% його загального
              обсягу відповідно. У країні вирощують ряд зернових культур,
              структура посівів яких має певні відмінності в зонах з різними
              природними і економічними умовами. З хлібних зернових культур в
              Україні вирощуються озимі пшениця і жито, крупяні - просо, гречка
              і рис, зернофуражні - ячмінь, кукурудза і овес, зернобобові -
              горох. У країні вирощують озимі та ярі культури, площі посівів
              яких за останні роки майже зрівнялися. Зазвичай більше сіють
              озимих культур, так як вони відрізняються більшою врожайністю.
              Однак нерідко несприятливі погодні умови призводять до загибелі
              посівів, і навесні доводиться пересівати їх ярими.
            </p>
          </div>
        )}
      </div>{" "}
    </div>
  );
};
export { ProductId };
