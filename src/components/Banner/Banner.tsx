import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";
import Image from "next/image";
import Julia from "@assets/img/juliabenedicto.jpg"

export const Banner = () => {
  return (
    <>
      <div className={style.container}>
        <Image
          className={style.image} 
          src={Julia}
          alt="Imagem de Julia Benedicto"
        />

        <div className={style.containerText}>
          <h1 className={style.title}>
            Olá, eu sou a <span  className={style.name}>Julia Benedicto</span>
          </h1>

          <p className={style.role}> <span className={style.arrow}>&raquo;</span> Software Engineer Jr <span className={style.arrow}> &laquo;</span></p>

          <div className={style.buttons}>
            <a className={classnames(style.cv, style.buttonsAction)} href="https://drive.google.com/file/d/1MKt469LVr_etJWXjSF3G-Lo32qrd88yu/view?usp=sharing" target="_blank">Ver CV</a>
            <a className={classnames(style.contato, style.buttonsAction)} href="mailto:juliabenedicto@hotmail.com" target="_blank">Entrar em contato</a>
          </div>
        </div>
      </div>
    </>
  );
};
