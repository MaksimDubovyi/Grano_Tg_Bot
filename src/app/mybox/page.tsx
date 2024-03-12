import React from "react";

type Props = {
  params: {
    id: string;
    locale: string;
  };
};

export default async function Hous({ params: { id, locale } }: Props) {
  return <div>we</div>;
}
