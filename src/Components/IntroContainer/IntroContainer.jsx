import React from 'react'
import Intro from '../Intro/Intro'
import './IntroContainer.css'


const IntroContainer = () => {

  return (
    <div className='intro_container'>
        <Intro  />
        <img src={"./assets/Img/perfil.jpg"} alt="Profile" />
    </div>
  )
}

export default IntroContainer
