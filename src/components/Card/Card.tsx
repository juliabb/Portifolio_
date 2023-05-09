import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

export interface Card {
  image?: any | JSX.Element;
  title?: string | JSX.Element;
  text?: string | JSX.Element;
  github?: string;
  link?: string;
}

export const Card = ({ image, title, text, github, link }: Card) => {
  return (
    <>
      <div className={style.containerCard}>
        <div className={style.containerImage}>
          <Image className={style.image} src={image} alt="" />
        </div>
        <div className={style.containerText}>
        <h2 className={style.title}>{title}</h2>

        <div className={style.containerLink}>
          <a className={style.link} href={github} target="_blank">
           Github
          </a>
          <a className={style.link} href={link} target="_blank">
            Veja aqui
          </a>
        </div>
        </div>
      </div>
    </>
  );
};
