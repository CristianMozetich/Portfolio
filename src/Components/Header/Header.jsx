import React from "react";
import { useContexto } from "../../Context/Context";
import "./Header.css";

const Header = () => {
  const { handleClickMenu, hamburguesa, cambiarIdioma, handleClickLight, idioma } =
    useContexto();


  const traducciones = {
    ingles: {
      Modo: "Mode",
      Lenguaje: "Lenguage",
      Español: "Spanish",
      Ingles: "English",
      Italiano: "Italian",
      CvEspaño: "CV Spanish",
      CvIngles: "CV English",
      CvItaliano: "CV Italian",
    },

    español: {
      Modo: "Modo",
      Lenguaje: "Idioma",
      Español: "Español",
      Ingles: "Ingles",
      Italiano: "Italiano",
      CvEspaño: "CV Español",
      CvIngles: "CV Inglés",
      CvItaliano: "CV Italiano",

    },

    italiano: {
      Modo: "Modalità",
      Lenguaje: "Lingua",
      Español: "Spagnolo",
      Ingles: "Inglese",
      Italiano: "Italiano",
      CvEspaño: "CV Spagnolo",
      CvIngles: "CV Inglés",
      CvItaliano: "CV Italiano",
    }
  }

  const traduccionActual = traducciones[idioma] || traducciones["ingles"];

  return (
    <header className="header">
      <button className="btn_light" onClick={handleClickLight}>
        <i className="fa-solid fa-circle-half-stroke"></i>Navy / Light
      </button>
      {hamburguesa ?
        <button className="btn_exit" onClick={handleClickMenu}>
          <i class="fa-solid fa-xmark"></i>
        </button> :
        <button className="btn_menu" onClick={handleClickMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      }
      {hamburguesa ? (
        <>
        <div className="backdrop" onClick={handleClickMenu}></div>
        <div className="menu_hamburguesa">
          <div>
            <h4 className="submenu_titulo">{traduccionActual.Modo}</h4>
            <a className="btn_submenu" onClick={handleClickLight}>
              <i className="fa-solid fa-circle-half-stroke"></i>Navy / Light
            </a>
          </div>
          <div className="idiomas">
            <h4 className="submenu_titulo">{traduccionActual.Lenguaje}</h4>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("español")}
            >
              {traduccionActual.Español}
            </a>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("ingles")}
            >
              {traduccionActual.Ingles}
            </a>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("italiano")}
            >
              {traduccionActual.Italiano}
            </a>
          </div>
          <div className="curriculums">
            <h4 className="submenu_titulo">Curriculums</h4>
            <a href="/assets/pdf/Cv_Mozetich_Cristian.pdf" target="_blank" className="btn_submenu">{traduccionActual.CvEspaño}</a>
            <a href="/assets/pdf/Cv_Mozetich_Cristian_EN.pdf" target="_blank" className="btn_submenu">{traduccionActual.CvIngles}</a>
            <a href="/assets/pdf/Cv_Mozetich_Cristian_IT.pdf" target="_blank" className="btn_submenu">{traduccionActual.CvItaliano}</a>
          </div>
        </div>
        </>
      ) : null}
    </header>
  );
};

export default Header;
