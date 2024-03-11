import React from "react";
import { useContexto } from "../../Context/Context";
import "./Header.css";

const Header = () => {
  const { handleClickMenu, hamburguesa, cambiarIdioma, handleClickLight } =
    useContexto();

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
        <div className="menu_hamburguesa">
          <div>
            <h4 className="submenu_titulo">Modo</h4>
            <a className="btn_submenu" onClick={handleClickLight}>
              <i className="fa-solid fa-circle-half-stroke"></i>Navy / Light
            </a>
          </div>
          <div className="idiomas">
            <h4 className="submenu_titulo">Lenguaje</h4>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("español")}
            >
              Español
            </a>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("ingles")}
            >
              Inlges
            </a>
            <a
              className="btn_submenu"
              onClick={() => cambiarIdioma("italiano")}
            >
              Italiano
            </a>
          </div>
          <div className="curriculums">
            <h4 className="submenu_titulo">Curriculums</h4>
            <a href="/assets/pdf/Cv_Mozetich_Cristian.pdf" target="_blank" className="btn_submenu">Cv Español</a>
            <a href="/assets/pdf/Cv_Mozetich_Cristian_EN.pdf" target="_blank" className="btn_submenu">Cv Inlges</a>
            <a href="/assets/pdf/Cv_Mozetich_Cristian_IT.pdf" target="_blank" className="btn_submenu">Cv Italiano</a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
