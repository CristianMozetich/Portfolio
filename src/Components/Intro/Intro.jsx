import React from 'react'
import './Intro.css'
import cvEs from '../../../public/assets/pdf/Mozetich_Cristian(es).pdf'

const Intro = () => {



  return (
    <div className='intro_desc'>
        <h1 className='titulo'>Hola, me llamo Cristian &#x1F44B;</h1>
        <p>Soy <mark>desarrollador frontend.</mark> Aquí puedes encontrar todos los enlaces relevantes y una selección de mis últimos proyectos.</p>
        <li>
            <a href="https://github.com/CristianMozetich" target='_blank'><i className="fa-brands fa-github"></i>Git Hub</a>
            <a href="https://www.linkedin.com/in/cristian-mozetich-135086256/" target='_blank'><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href="mailto:cristianmozetich@gmail.com?subject=Asunto%20del%20correo&body=Contenido%20del%20correo%20electr%C3%B3nico"><i className="fa-regular fa-envelope"></i>Email</a>
            <a href={cvEs} target='_blank'><i class="fa-regular fa-file"></i>Curriculum</a>
        </li>
    </div>
  )
}

export default Intro
