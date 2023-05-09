import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";
import Logo from "@assets/img/logo.png";
import Image from "next/image";

export const Header = () => {
  
  return (
    <>
      <div className={style.container}>
        <nav className={style.containerNav}>
          <Image src={Logo} alt="Logo" />

          <div  className={style.containerTitle}>
            <ul className={style.list}>
              <li className={style.title}><a href="#home">Início</a></li>
              <li className={style.title}><a href="#about">Sobre</a></li>
              <li className={style.title}><a href="#skills">Habilidades</a></li>
              <li className={style.title}><a href="#emphasis">Destaques</a></li>
              <li className={style.title}><a href="#contact">Contatos</a></li>
              <li className={style.title}><a href="#projects">Projetos</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
