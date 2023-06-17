import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro_desc'>
        <h1>Hi I'm Cristian &#x1F44B;</h1>
        <p>I'm a <mark>web developer</mark> , <mark>drummer</mark> , and <mark>physical education teacher</mark> based in Dublin. Here you can find all relevant links and a selection of my latest projects</p>
        <button><a href="https://github.com/CristianMozetich" target='_blank'>Git Hub</a></button>
        <button><a href="https://www.linkedin.com/in/cristian-mozetich-135086256/" target='_blank'>LinkedIn</a></button>
        <button><a href="https://wa.me/353830941442" target='_blank'>Whatsapp</a></button>
    </div>
  )
}

export default Intro
