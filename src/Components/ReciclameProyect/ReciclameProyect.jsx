import React from "react";
import { useIdioma } from "../../Context/idiomaContext";
import './ReciclameProyect.css'

const ReciclameProyect = () => {
    const { idioma } = useIdioma();

  const traducciones = {
    ingles: {
      nombreProyecto: "Recíclame",
      descripcion:
        "I participated in the development of the interface of an application that aims to connect people with the intention of exchanging recyclable materials.",
    },
    español: {
      nombreProyecto: "Recíclame",
      descripcion:
        "Participé en el desarrollo de la interfaz de una aplicación que busca conectar personas con la intención de intercambiar materiales reciclables.",
    },
    italiano: {
      nombreProyecto: "Recíclame",
      descripcion:
        "Ho partecipato allo sviluppo dell'interfaccia di un'applicazione che mira a connettere le persone con l'intenzione di scambiare materiali riciclabili.",
    },
  };

  const traduccionActual = traducciones[idioma] || traducciones["ingles"];
  return (
    <>
      <article className="reciclame_container">
        <a href="https://s13-16-t-java-next-frontend.vercel.app/" target="_blank">
          <img
            className="img_reciclame"
            src={"./assets/Img/reciclame.png"}
            alt="ReciclameProyect"
          />
        </a>
        <div className="desc_reciclame">
          <a href="https://s13-16-t-java-next-frontend.vercel.app/" target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <h2>{traduccionActual.nombreProyecto}</h2>
          </a>
          <div>
            <p>{traduccionActual.descripcion}</p>
          </div>
          <div className="divider"></div>
          <div className="tech_reciclame">
            <p className="tech_reci">Next.js - React.js - Tailwind - Vercel</p>
            <a
              className="github_reciclame"
              href="https://github.com/No-Country/s13-16-t-java-next"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ReciclameProyect;
