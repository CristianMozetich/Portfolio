import React from 'react'
import './EducarProyect.css'

const EducarProyect = () => {

  return (
    <>
    <div className='titulo_proyectos'>
      <h1>Proyectos en equipo</h1>
    </div>
    <div className='educar_container'>
        <a href='https://educ-ar-frontend.vercel.app/' target='_blank'>
        <img className='img_educar' src={"./assets/Img/Educar.png"} alt="EducarProyect" />
        </a>
        <div className='desc_educar'>
        <a href='https://educ-ar-frontend.vercel.app/' target='_blank'>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <h2>Educar</h2>
        </a>
            <p>Participé de trabajo colaborativo donde contribuí en el desarrollo de la interfaz de login. Esta App está dedicada a simplificar la búsqueda de instituciones educativas en la provincia de Córdoba, 🇦🇷. Producido como parte de una simulación para NoCountry, esta iniciativa tiene como objetivo facilitar el acceso a información relevante sobre centros educativos en nuestra región.</p>
        </div>
    </div>
    </>
  )
}

export default EducarProyect
