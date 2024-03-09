import React from 'react'
import './LinksMedia.css'
import { useIdioma } from '../../Context/idiomaContext'

const LinksMedia = () => {
  const { cambiarIdioma } = useIdioma()
  return (
    <div className='LinksMedia'>
        <button onClick={()=> cambiarIdioma('ingles')}>En</button>
        <button onClick={()=> cambiarIdioma('español')}>Es</button>
        <button onClick={()=> cambiarIdioma('italiano')}>It</button>
        <a href="https://github.com/CristianMozetich" target='_blank'><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/cristian-mozetich-135086256/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        <div className='linea-vertical'></div>
    </div>
  )
}
export default LinksMedia
