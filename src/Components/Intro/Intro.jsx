import React from "react";
import "./Intro.css";
import { useContexto } from "../../Context/Context";

const Intro = () => {
  const { idioma } = useContexto();

  return (
    <div className="intro_desc">
      {idioma === "ingles" && (
        <>
          <h1 className="titulo">Hi, I'm Cristian &#x1F44B;</h1>
          <p>
            I am a <mark>Full Stack developer.</mark> Here you can find all the
            relevant links and a selection of my latest projects.
          </p>
        </>
      )}
      {idioma === "español" && (
        <>
          <h1 className="titulo">Hola, soy Cristian &#x1F44B;</h1>
          <p>
            Soy <mark>desarrollador Full Stack.</mark> Aquí puedes encontrar
            todos los enlaces relevantes y una selección de mis últimos
            proyectos.
          </p>
        </>
      )}
      {idioma === "italiano" && (
        <>
          <h1 className="titulo">Ciao, sono Cristian &#x1F44B;</h1>
          <p>
            Sono <mark>sviluppatore Full Stack.</mark> Qui puoi trovare tutti i
            link rilevanti e una selezione dei miei ultimi progetti.
          </p>
        </>
      )}
      <li>
        <a href="https://github.com/CristianMozetich" target="_blank">
          <i className="fa-brands fa-github"></i>Git Hub
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-mozetich-135086256/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>LinkedIn
        </a>
        <a href="mailto:cristianmozetich@gmail.com?subject=Asunto%20del%20correo&body=Contenido%20del%20correo%20electr%C3%B3nico">
          <i className="fa-regular fa-envelope"></i>Email
        </a>
        <a className="cv" href="/assets/pdf/Cv_Mozetich_Cristian.pdf" target="_blank">
          <i className="fa-regular fa-file"></i>Curriculum Es
        </a>
        <a className="cv" href="/assets/pdf/Cv_Mozetich_Cristian_IT.pdf" target="_blank">
          <i className="fa-regular fa-file"></i>Curriculum It
        </a>
        <a className="cv" href="/assets/pdf/Cv_Mozetich_Cristian_EN.pdf" target="_blank">
          <i className="fa-regular fa-file"></i>Curriculum En
        </a>
      </li>
    </div>
  );
};

export default Intro;
