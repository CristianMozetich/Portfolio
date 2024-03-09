import React from "react";
import { useIdioma } from "../../Context/idiomaContext";
import EducarProyect from "../EducarProyect/EducarProyect";
import "./CollaborativeProyects.css";
import ReciclameProyect from "../ReciclameProyect/ReciclameProyect";

const CollaborativeProyects = () => {
  const { idioma } = useIdioma();

  const traduccion = {
    ingles: {
      titulo: "Team Projects",
    },
    español: {
      titulo: "Proyectos en equipo",
    },
    italiano: {
      titulo: "Progetti di squadra",
    },
  };

  const traduccionActual = traduccion[idioma] || traduccion["ingles"];
  return (
    <div className="collaborativeProyects">
      <h1>{traduccionActual.titulo}</h1>
      <ReciclameProyect />
      <EducarProyect />
    </div>
  );
};

export default CollaborativeProyects;
