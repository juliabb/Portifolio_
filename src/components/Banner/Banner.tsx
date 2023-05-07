import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";

export const Banner = () => {
  return (
    <>
      <div className={style.container}>
        <img
          className={style.image}
          src="https://avatars.githubusercontent.com/u/68789655?v=4"
          alt="Imagem de Julia Benedicto"
        />

        <div className={style.containerText}>
          <h1 className={style.title}>
            Olá, eu sou a <span  className={style.name}>Julia Benedicto</span>
          </h1>

          <p className={style.role}> <span className={style.arrow}>&raquo;</span> Software Engineer Jr <span className={style.arrow}> &laquo;</span></p>

          <div className={style.buttons}>
            <a className={classnames(style.cv, style.buttonsAction)} href="https://drive.google.com/file/d/1_A7SuWDwsNBkzbeE_m99mCOv24eRbtgW/view?usp=share_link" target="_blank">Ver CV</a>
            <a className={classnames(style.contato, style.buttonsAction)} href="mailto:juliabenedicto@hotmail.com" target="_blank">Entrar em contato</a>
          </div>
        </div>
      </div>
    </>
  );
};
