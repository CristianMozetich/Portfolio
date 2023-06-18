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
            <img src={proyecto.img} alt={proyecto.name} />
            <a href={proyecto.web} target='_blank'><h3>{proyecto.name}</h3></a>
            <p className='year'>{proyecto.year}</p>
            <p className='desc'>{proyecto.desc}</p>
            <p className='tech'>{proyecto.tech}</p>
          </div>
        ))}
    </div>
    </>
  )
}

export default Proyects
