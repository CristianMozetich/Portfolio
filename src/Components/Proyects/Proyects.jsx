import React from 'react'
import './Proyects.css'
import { proyectos } from '../../../asyncmock'


const Proyects = () => {
  return (
    <>
    <div className='contenedor_titulo'>
      <h1 className='titulo_proyectos'>Proyects</h1>
    </div>
    <div  className="proyectos">
      {
      proyectos.map((proyecto) => (
          <div className='tarjeta_proyectos' key={proyecto.id}>
            <div className='contenedor_proyectos'>
              <a href={proyecto.web} target='_blank'><h2>{proyecto.name}</h2></a>
            </div>
            <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
            <p className='tech'>{proyecto.tech}</p>
            <p className='year'>{proyecto.year}</p>
          </div>
        ))}
    </div>
    </>
  )
}

export default Proyects
