import React from "react";
import style from "./style.module.scss";
import classnames from 'classnames'

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
          <h1 className={classnames(style.title, style.textOne)}>Julia Benedicto</h1>
   
          <p className={style.role}> &raquo;	 Software Engineer Jr 	&laquo;</p>
          <p className={classnames(style.text, style.textOne)}>
            Atualmente como Software Engineer Jr, construindo e evoluindo
            produtos na área educacional, atuando com JavaScript, React,
            TypeScript, Next.Js, GraphQL da Apollo.{" "}
          </p>

          <p className={style.text}>
            Analista e desenvolvedora de sistemas pelo Instituto Educacional
            Anhanguera, participei da 7ª geração do bootcamp de especialização
            Front-end da Laboratória, onde também desenvolvi minhas competências
            técnicas e socioemocionais.
          </p>
        </div>
      </div>
    </>
  );
};
