import React, { useState, useEffect } from 'react';
import IntroContainer from './Components/IntroContainer/IntroContainer';
import Proyects from './Components/Proyects/Proyects';
import './App.css';
import EducarProyect from './Components/EducarProyect/EducarProyect';

function App() {
  const [modoLight, setModoLight] = useState(false);

  useEffect(() => {
    if (modoLight) {
      document.body.classList.add('modo-light');
    } else {
      document.body.classList.remove('modo-light');
    }
  }, [modoLight]);

  const handleClick = () => {
    setModoLight(!modoLight);
  }

  return (
    <div className={`App ${modoLight ? 'modo-light' : 'modo-navy'}`}>
      <button className='btn' onClick={handleClick}><i className="fa-solid fa-circle-half-stroke"></i>Navy/Light</button>
      <IntroContainer />
      <EducarProyect/>
      <Proyects />
    </div>
  );
}

export default App;

