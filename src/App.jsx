import React, { useState, useEffect } from 'react';
import IntroContainer from './Components/IntroContainer/IntroContainer';
import Proyects from './Components/Proyects/Proyects';
import CollaborativeProyects from './Components/CollaborativeProyects/CollaborativeProyects';
import LinksMedia from './Components/LinksMedia/LinksMedia';
import { useIdioma } from './Context/idiomaContext';
import './App.css';



function App() {
  const [modoLight, setModoLight] = useState(false);
  const { cambiarIdioma } = useIdioma()


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
      <button className='btn' onClick={handleClick}><i className="fa-solid fa-circle-half-stroke"></i>Navy / Light</button>
      <div className='lenguajes'>
        <button onClick={()=> cambiarIdioma('ingles')}>En</button>
        <button onClick={()=> cambiarIdioma('español')}>Es</button>
        <button onClick={()=> cambiarIdioma('italiano')}>It</button>
      </div>
      <LinksMedia/>
      <IntroContainer />
      <CollaborativeProyects/>
      <Proyects />
    </div>
  );
}

export default App;

