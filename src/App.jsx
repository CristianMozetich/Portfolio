import React from "react";
import IntroContainer from "./Components/IntroContainer/IntroContainer";
import Proyects from "./Components/Proyects/Proyects";
import CollaborativeProyects from "./Components/CollaborativeProyects/CollaborativeProyects";
import LinksMedia from "./Components/LinksMedia/LinksMedia";
import { useContexto } from "./Context/Context";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  const { modoLight } = useContexto();

  return (
    <div className={`App ${modoLight ? "modo-light" : "modo-navy"}`}>
      <Header />
      <LinksMedia />
      <IntroContainer />
      <CollaborativeProyects />
      <Proyects />
    </div>
  );
}

export default App;
