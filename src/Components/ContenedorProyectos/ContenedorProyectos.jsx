import React from 'react'
import './ContenedorProyectos.css'
import Proyects from '../Proyects/Proyects'


const ContenedorProyectos = () => {
  return (
    <>
    <div>
        <h1 className='titulo_proyectos '>Proyectos</h1>
    </div>
    <div  className="contenedor_proyectos">
        <Proyects/>
    </div>
    </>
  )
}

export default ContenedorProyectos
