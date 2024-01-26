import { createContext, useContext, useState } from "react";

const IdiomaContext = createContext()

export const useIdioma = () => {
    return useContext(IdiomaContext)
}

export const IdiomaProvider = ({ children }) => {
    const [idioma, setIdioma] = useState('ingles');

    const cambiarIdioma = (nuevoIdioma) => {
        setIdioma(nuevoIdioma)
    }

    return(
        <IdiomaContext.Provider value={{ idioma, cambiarIdioma }}>
            {children}
        </IdiomaContext.Provider>
    )
}