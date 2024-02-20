import React from "react";
import { useIdioma } from "../../Context/idiomaContext";
import EducarProyect from "../EducarProyect/EducarProyect";
import "./CollaborativeProyects.css";

const CollaborativeProyects = () => {
  const { idioma } = useIdioma();

  const traduccion = {
    ingles: {
      titulo: "Collaborative Projects",
    },
    español: {
      titulo: "Proyectos colaborativos",
    },
    italiano: {
      titulo: "Progetti collaborativi",
    },
  };

  const traduccionActual = traduccion[idioma] || traduccion["ingles"];
  return (
    <div className="collaborativeProyects">
      <h1>{traduccionActual.titulo}</h1>
      <EducarProyect />
    </div>
  );
};

export default CollaborativeProyects;
