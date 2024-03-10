import React from "react";
import { proyectos } from "../../../proymock";
import { useContexto } from "../../Context/Context";
import "./Proyects.css";

const Proyects = () => {
  const { idioma } = useContexto();

  const tituloTraducido = {
    ingles: "Individual Projects",
    español: "Proyectos Individuales",
    italiano: "Progetti Individuali",
  };

  return (
    <>
      <div className="proyectos_titulo">
        <h2 className="proy_titulo">{tituloTraducido[idioma]}</h2>
      </div>
      <div className="contenedor_proyectos">
        {proyectos.map((proyecto) => (
          <article className="tarjeta_proyectos" key={proyecto.id}>
            <div>
              <a href={proyecto.web} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <h2 className="title">{proyecto.name[idioma]}</h2>
              </a>
            </div>

            <div>
              <a href={proyecto.web} target="_blank">
                <p className="desc">{proyecto.desc[idioma]}</p>
              </a>
            </div>

            <div className="divider"></div>

            <div>
              <p className="tech">{proyecto.tech}</p>
            </div>

            <div>
              <p className="year">{proyecto.year}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Proyects;
