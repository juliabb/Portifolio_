import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

export interface Card {
name: string
icon: any
}

export const MiniCard = ({name, icon}: Card) => {
  return (
    <>
     <div className={style.container}>
        <p className={style.name}>{name}</p>
        <Image className={style.icon} src={icon} alt={name} />
     </div>
    </>
  );
};
