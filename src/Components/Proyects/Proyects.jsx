import React from 'react'
import { proyectos } from '../../../asyncmock'
import './Proyects.css'


const Proyects = () => {
  return (
    <>
    <div className='titulo_proyectos'>
      <h2>Proyectos</h2>
    </div>
    <div className='contenedor_proyectos'>
      {
      proyectos.map((proyecto) => (
          <div className='tarjeta_proyectos' key={proyecto.id}>
            <div>
              <a href={proyecto.web} target='_blank'><h2 className='title'>{proyecto.name}</h2></a>
            </div>

            <div>
              <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
            </div>

            <div>
              <p className='tech'>{proyecto.tech}</p>
            </div>

            <div>
              <p className='year'>{proyecto.year}</p>
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default Proyects
