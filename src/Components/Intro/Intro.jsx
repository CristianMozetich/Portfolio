import React from 'react'
import './Intro.css'
import { useIdioma } from '../../Context/idiomaContext'

const Intro = () => {
  const { idioma } = useIdioma()


  return (
    <div className='intro_desc'>
      {idioma === 'ingles' && (
        <>
          <h1 className='titulo'>Hi, I'm Cristian &#x1F44B;</h1>
          <p>I am a <mark>full stack developer.</mark> Here you can find all the relevant links and a selection of my latest projects.</p>
        </>
      )}
      {idioma === 'español' && (
        <>
          <h1 className='titulo'>Hola, soy Cristian &#x1F44B;</h1>
          <p>Soy <mark>desarrollador full stack.</mark> Aquí puedes encontrar todos los enlaces relevantes y una selección de mis últimos proyectos.</p>
        </>
      )}
      {idioma === 'italiano' && (
        <>
          <h1 className='titulo'>Ciao, sono Cristian &#x1F44B;</h1>
          <p>Sono <mark>sviluppatore full stack.</mark> Qui puoi trovare tutti i link rilevanti e una selezione dei miei ultimi progetti.</p>
        </>
      )}
        <li>
            <a href="https://github.com/CristianMozetich" target='_blank'><i className="fa-brands fa-github"></i>Git Hub</a>
            <a href="https://www.linkedin.com/in/cristian-mozetich-135086256/" target='_blank'><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href="mailto:cristianmozetich@gmail.com?subject=Asunto%20del%20correo&body=Contenido%20del%20correo%20electr%C3%B3nico"><i className="fa-regular fa-envelope"></i>Email</a>
            <a href="../../../public/assets/pdf/Cv_Mozetich_Cristian.pdf" target='_blank'><i className="fa-regular fa-file"></i>Resume Es</a>
            <a href="../../../public/assets/pdf/Cv_Mozetich_Cristian_IT.pdf" target='_blank'><i className="fa-regular fa-file"></i>Resume It</a>
            <a href="../../../public/assets/pdf/Cv_Mozetich_Cristian_EN.pdf" target='_blank'><i className="fa-regular fa-file"></i>Resume En</a>
        </li>
    </div>
  )
}

export default Intro
