import React from 'react'
import Proyects from '../Proyects/Proyects'
import './ContenedorProyectos.css'


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
