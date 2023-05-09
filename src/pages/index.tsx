import Head from "next/head";
import style from "@styles/style.module.css";
import { Card } from "../components/Card/Card";
import { Banner } from "@components/Banner/Banner";
import { Projects } from "@constants/Projects";
import { Highlight } from "@constants/Highlight";
import { Skills } from "@constants/Skills";
import { MiniCard } from "@components/MiniCard/MiniCard";
import { About } from "@components/About/About";
import { Contact } from "@components/Contact/Contact";
import { Info } from "@constants/Info";
import { Header } from "@components/Header/Header";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <Head>
        <title> Portifólio Julia Benedicto - Desenvolvedora Front-End </title>
        <meta name="keywords" content="Julia Benedicto, desenvolvedora front-end, HTML, CSS, JavaScript, ReactJS, TypeScript, Next.js, Node.js, GraphQL, Apollo, Web API, Firebase, Git, Scrum, Kanban" />
        <meta name="description" content="Conheça Julia Benedicto, uma talentosa desenvolvedora front-end com conhecimentos em  HTML, CSS, JavaScript e várias tecnologias modernas, como ReactJS, TypeScript e Next.js. Com habilidades em Node.js, GraphQL e Apollo, Julia é capaz de criar aplicativos web robustos e escaláveis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={style.main}>
        <div className={style.containerBanner} id="home">
          <Banner />
        </div>

        <div id="about" className={classNames(style.containerTitle, style.containerAbout)}>
          <h2 className={style.title}>Sobre mim &#128512;</h2>
          <About />
        </div>

        <div id="skills" className={style.containerTitle}>
          <h2 className={style.title}>Habilidades &#128129;</h2>

          <div className={style.containerSkills}>
            {Skills.map(({ name, icon }) => (
              <MiniCard key={name} icon={icon} name={name} />
            ))}
          </div>
        </div>

        <div id="emphasis" className={style.containerTitle}>
          <h2 className={style.title}>Destaques &#11088;</h2>

          <div className={style.highlight}>
            {Highlight.map(({ image, title, link, github }) => (
              <Card
                key={title}
                image={image}
                title={title}
                github={github}
                link={link}
              />
            ))}
          </div>
        </div>

        <div id="contact" className={style.containerTitle}>
          <h2 className={style.title}>Contatos &#128222;</h2>

          <div className={style.containerContact}>
            {Info.map(({ link, icon, type, text }) => (
              <Contact
                key={text}
                icon={icon}
                link={link}
                text={text}
                type={type}
              />
            ))}
          </div>
        </div>

        <div id="projects" className={style.containerTitle}>
          <h2 className={style.title}>Projetos &#128133;</h2>

          <div className={style.highlight}>
            {Projects.map(({ image, title, text, link, github }) => (
              <Card
                key={title}
                image={image}
                title={title}
                text={text}
                github={github}
                link={link}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
