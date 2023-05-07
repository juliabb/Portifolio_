import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";
import Logo from '@assets/img/logo.png'
import Image from "next/image";

export const Header = () => {
  return (
    <>
    <div>
      <nav>
      <Image src={Logo} alt="Logo" />

      <div>
<ul>
  <li>Início</li>
  <li>Sobre</li>
  <li>Habilidades</li>
  <li>Destaques</li>
  <li>Projetos</li>
  <li>Contatos</li>
</ul>
      </div>
      </nav>      
    </div>
    </>
  );
};
