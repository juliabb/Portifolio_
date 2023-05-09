import Head from "next/head";
import style from '@styles/style.module.css'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio Julia Benedicto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={style.main}>
        <div id="home">
        <Banner />
        </div>

        <div id="about" className={style.containerTitle}>
          <h2 className={style.title}>Sobre mim &#128512;</h2>
        </div>
        <About />

        <div id="skills" className={style.containerTitle}>
          <h2 className={style.title}>Habilidades &#128129;</h2>
        </div>

        <div className={style.containerSkills}>
          {Skills.map(({ name, icon }) => (
            <MiniCard key={name} icon={icon} name={name} />
          ))}
        </div>

        <div id="emphasis" className={style.containerTitle}>
          <h2 className={style.title}>Destaques &#11088;</h2>
        </div>

        <div>
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


        <div id="contact" className={style.containerTitle}>
          <h2 className={style.title}>Contatos &#128222;</h2>
        </div>

        <div className={style.containerContact}>
          {Info.map(({ link, icon, type, text }) => (
          <Contact key={text} icon={icon} link={link} text={text} type={type} />
          ))}
        </div>

        <div id="projects" className={style.containerTitle}>
          <h2 className={style.title}>Projetos &#128133;</h2>
        </div>

        <div>
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
      </main>
    </>
  );
}
