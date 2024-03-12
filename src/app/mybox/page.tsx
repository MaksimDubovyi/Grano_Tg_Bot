import React from "react";
import { useAppSelector } from "../redux/hook";
import { ProductType } from "@/app/type/type";
import { MyboxProductList } from "../components/mybox-product-list/MyboxProductList";

export default async function Hous() {
  return (
    <div>
      <MyboxProductList />
    </div>
  );
}
