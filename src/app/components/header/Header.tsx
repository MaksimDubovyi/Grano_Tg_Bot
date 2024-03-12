import React from "react";
import style from "./header.module.css";
import { useAppSelector } from "../../redux/hook";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const { myBox } = useAppSelector((state) => state.appReducer);

  const onClick = () => {};

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
      <Link rel="stylesheet" href="/mybox" className={style.btn}>
        {myBox.length > 0 && (
          <span className={style.length}>{myBox.length}</span>
        )}
        <Image
          src={`/product/diagram.png`}
          width={30}
          height={30}
          alt="diagram"
          style={{ width: "25px", height: "25px" }}
        />
      </Link>
    </div>
  );
};

export { Header };
