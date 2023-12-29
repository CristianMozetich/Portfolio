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
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <h2>Educar</h2>
        </a>
        <div>
          <p>Participé en el desarrollo de la interfaz de login para una App que simplifica la búsqueda de información sobre instituciones educativas en la provincia de Córdoba, 🇦🇷.</p>
        </div>
        <div className='divider'></div>
        <div className='tech_educar'>
          <p className='tech_edu'>NextJs - NextUI - Tailwind - Vercel</p>
          <a className='github_educar' href="https://github.com/No-Country/c15-40-t-java-react" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>
        </div>
    </article>
  </>
  )
}

export default EducarProyect
