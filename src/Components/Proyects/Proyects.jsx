import React from 'react'
import { proyectos } from '../../../asyncmock'
import './Proyects.css'


const Proyects = () => {
  return (
    <>
      <div className='proy_colaborativo'>
        <h2>Proyectos</h2>
      </div>
      <div className='contenedor_proyectos'>
        {
        proyectos.map((proyecto) => (
            <article className='tarjeta_proyectos' key={proyecto.id}>
              <div>
                <a href={proyecto.web} target='_blank'>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <h2 className='title'>{proyecto.name}</h2>
                </a>
              </div>

              <div>
                <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
              </div>

              <div className='divider'>
              
              </div>

              <div>
                <p className='tech'>{proyecto.tech}</p>
              </div>

              <div>
                <p className='year'>{proyecto.year}</p>
              </div>
            </article>
          ))}
      </div>
    </>
  )
}

export default Proyects
