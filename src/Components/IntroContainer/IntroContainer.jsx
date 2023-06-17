import React from 'react'
import Intro from '../Intro/Intro'
import './IntroContainer.css'

const IntroContainer = () => {
  return (
    <div className='intro_container'>
        <Intro/>
        <img src={"/src/assets/Img/portfolio1.jpg"} alt="" />
    </div>
  )
}

export default IntroContainer
