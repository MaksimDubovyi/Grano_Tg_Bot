"use client";

import { useAppSelector } from "./redux/hook";
import style from "./page.module.css";
import { ProductList } from "./components/product-list/ProductList";
import { Header } from "./components/header/Header";

// const getProduct = async () => {
//   console.log("getProduct");
//   try {
//     const res = await fetch("http://localhost:3000/api/product", {
//       method: "GET",
//       next: {
//         revalidate: 1,
//       },
//     });
//     const data = await res.json();
//     console.log("getProduct", data);
//     // return data;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

export default function Home() {
  const { dataProducts } = useAppSelector((state) => state.appReducer);

  // const fetchData = async () => {
  //   const data = await getProduct();
  //   //console.log("Data:", data); // Вивід результату запиту на консоль
  // };

  // fetchData(); // Виклик функції для отримання даних

  return (
    <div>
      <Header />
      <main className={style.main}>
        <span className={style.span}></span>
        <h2>Зернові культури</h2>
        <ProductList data={dataProducts.slice(0, 4)} />
        <span className={style.span}></span>
        <h2>Насіння</h2>
        <ProductList data={dataProducts.slice(4, 12)} />
        <span className={style.span}></span>
        <h2>Олійні культури</h2>
        <ProductList data={dataProducts.slice(12, 21)} />
        <span className={style.span}></span>
        <h2>Бобові культури</h2>
        <ProductList data={dataProducts.slice(21, 30)} />
        <span className={style.span}></span>
        <h2>Корм для тварин</h2>
        <ProductList data={dataProducts.slice(30, 34)} />
        <span className={style.span}></span>
        <h2>Роздрібна продукція</h2>
        <ProductList data={dataProducts.slice(34, 39)} />
      </main>
    </div>
  );
}
