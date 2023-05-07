import React from "react";
import style from "./style.module.scss";
import classnames from 'classnames'
import Image from "next/image";

export interface Contact {
  link: string
  icon: any
  type: string
  text: string
}

export const Contact = ({link, icon, type, text}: Contact) => {
  return (
    <>
    <div className={style.container}>
      <a href={link} target="_blank"><Image className={style.icon} src={icon} alt={link} /></a>
      <a className={style.type} href={link} target="_blank">{type}</a>
      <a className={style.text} href={link} target="_blank">{text}</a>
    </div>
    </>
  );
};
