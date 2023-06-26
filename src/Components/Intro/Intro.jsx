import React from 'react'
import './Intro.css'

const Intro = () => {



  return (
    <div className='intro_desc'>
        <h1 className='titulo'>Hi, I'm Cristian &#x1F44B;</h1>
        <p>I'm a <mark>web developer</mark> , <mark>drummer</mark> , and <mark>physical education teacher</mark> based in Dublin. Here you can find all relevant links and a selection of my latest projects</p>
        <li>
            <a href="https://github.com/CristianMozetich" target='_blank'><i className="fa-brands fa-github"></i>Git Hub</a>
            <a href="https://www.linkedin.com/in/cristian-mozetich-135086256/" target='_blank'><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href="https://wa.me/353830941442" target='_blank'><i className="fa-brands fa-whatsapp"></i>WhatsApp</a>
            <a href="mailto:cristianmozetich@gmail.com?subject=Asunto%20del%20correo&body=Contenido%20del%20correo%20electr%C3%B3nico"><i className="fa-regular fa-envelope"></i>Email</a>
        </li>
    </div>
  )
}

export default Intro
