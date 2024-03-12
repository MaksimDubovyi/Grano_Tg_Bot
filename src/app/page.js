"use client";
import { useAppSelector } from "./redux/hook";
import style from "./page.module.css";
import { ProductList } from "./components/product-list/ProductList";
import { Header } from "./components/header/Header";

export default function Home() {
  const { dataProducts } = useAppSelector((state) => state.appReducer);
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
      <footer className={style.footer}>
        © Grano Solution LLC — Всі права захищені
      </footer>
    </div>
  );
}
