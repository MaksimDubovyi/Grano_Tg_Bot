import React from "react";
import { ProductId } from "./components/product/ProductId";
type Props = {
  params: {
    id: string;
    locale: string;
  };
};
const i18nNamespaces = ["translation"];
export default async function Hous({ params: { id, locale } }: Props) {
  return (
    <div>
      <ProductId id={id} />
    </div>
  );
}
