import React, { useState, useEffect } from 'react';
import './App.css';
import IntroContainer from './Components/IntroContainer/IntroContainer';
import Proyects from './Components/Proyects/Proyects';

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add('modo-oscuro');
    } else {
      document.body.classList.remove('modo-oscuro');
    }
  }, [modoOscuro]);

  const handleClick = () => {
    setModoOscuro(!modoOscuro);
  }

  return (
    <div className={`App ${modoOscuro ? 'modo-oscuro' : 'modo-claro'}`}>
      <button onClick={handleClick}>Cambiar Modo</button>
      <IntroContainer />
      <Proyects />
    </div>
  );
}

export default App;

