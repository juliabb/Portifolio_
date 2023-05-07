import React from "react";
import style from "./style.module.scss";
import classnames from "classnames";

export const About = () => {
  return (
    <>
      <div className={style.container}>
        <p className={style.text}>
          Sou uma desenvolvedora Front-end apaixonada por tecnologia e sempre
          buscando evoluir. Recentemente trabalhei como Desenvolvedora Front-end
          Jr, onde tive a oportunidade de aprender e desenvolver habilidades
          como melhoria de performance e SEO, além de contribuir para a evolução
          do produto Marketplace através da criação de novos componentes e
          melhoria do UI. Durante este período, trabalhei com uma variedade de
          tecnologias, como JavaScript, React.js, TypeScript, Next.Js, GraphQL
          da Apollo, Storybook, Node.js, Amplitude, Sass, Styled Components,
          Git, Scrum e Kanban.
        </p>

        <p className={style.text}>
          Sou analista e desenvolvedora de sistemas pelo Instituto Educacional
          Anhanguera e participei do bootcamp de especialização Front-end da
          Laboratória, onde desenvolvi minhas habilidades técnicas e
          socioemocionais, buscando sempre novos desafios para crescer
          profissionalmente.
        </p>
      </div>
    </>
  );
};
