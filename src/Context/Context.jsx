import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext()

export const useContexto = () => {
    return useContext(Context)
}

export const ContextProvider = ({ children }) => {
    const [idioma, setIdioma] = useState('ingles');
    const [hamburguesa, setHamburguesa] = useState(false)
    const [modoLight, setModoLight] = useState(false);


    const handleClickMenu = (e) => {
        e.preventDefault

        setHamburguesa(!hamburguesa)
    }

    const cambiarIdioma = (nuevoIdioma) => {
        setIdioma(nuevoIdioma)
    }

    useEffect(() => {
        if (modoLight) {
          document.body.classList.add("modo-light");
        } else {
          document.body.classList.remove("modo-light");
        }
      }, [modoLight]);
    const handleClickLight = () => {
        setModoLight(!modoLight);
      };

    return(
        <Context.Provider value={{ idioma, cambiarIdioma, handleClickMenu, hamburguesa, handleClickLight, modoLight }}>
            {children}
        </Context.Provider>
    )
}