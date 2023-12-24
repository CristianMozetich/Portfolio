import React from 'react'
import './EducarProyect.css'

const EducarProyect = () => {
  return (
  <>
    <div className='proy_colaborativo'>
      <h2>Proyecto colaborativo</h2>
    </div>
    <article className='educar_container'>
        <a href='https://educ-ar-frontend.vercel.app/' target='_blank'>
        <img className='img_educar' src={"./assets/Img/Educar.png"} alt="EducarProyect" />
        </a>
        <div className='desc_educar'>
        <a href='https://educ-ar-frontend.vercel.app/' target='_blank'>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            <h2>Educar</h2>
        </a>
            <p>Participé en el desarrollo de la interfaz de login para una App que simplifica la búsqueda de instituciones educativas en la provincia de Córdoba, 🇦🇷. Formó parte de un proyecto para NoCountry, con el objetivo de facilitar el acceso a información sobre centros educativos locales</p>
        </div>
    </article>
  </>
  )
}

export default EducarProyect
