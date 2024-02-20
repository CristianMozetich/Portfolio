import "./EducarProyect.css";
import { useIdioma } from "../../Context/idiomaContext";

const EducarProyect = () => {
  const { idioma } = useIdioma();

  const traducciones = {
    ingles: {
      nombreProyecto: "Educar",
      descripcion:
        "I participated in developing the interface for an application that simplifies the search for information about educational institutions.",
    },
    español: {
      nombreProyecto: "Educar",
      descripcion:
        "Participé en el desarrollo de la interfaz de una aplicación que simplifica la búsqueda de información sobre instituciones educativas.",
    },
    italiano: {
      nombreProyecto: "Educar",
      descripcion:
        "Ho partecipato allo sviluppo dell'interfaccia di un'applicazione che semplifica la ricerca di informazioni sulle istituzioni educative.",
    },
  };

  const traduccionActual = traducciones[idioma] || traducciones["ingles"];

  return (
    <>
      <article className="educar_container">
        <a href="https://educ-ar-frontend.vercel.app/" target="_blank">
          <img
            className="img_educar"
            src={"./assets/Img/Educar.png"}
            alt="EducarProyect"
          />
        </a>
        <div className="desc_educar">
          <a href="https://educ-ar-frontend.vercel.app/" target="_blank">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <h2>{traduccionActual.nombreProyecto}</h2>
          </a>
          <div>
            <p>{traduccionActual.descripcion}</p>
          </div>
          <div className="divider"></div>
          <div className="tech_educar">
            <p className="tech_edu">NextJs - NextUI - Tailwind - Vercel</p>
            <a
              className="github_educar"
              href="https://github.com/No-Country/c15-40-t-java-react"
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

export default EducarProyect;
