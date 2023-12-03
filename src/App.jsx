import React, { useState, useEffect } from 'react';
import './App.css';
import IntroContainer from './Components/IntroContainer/IntroContainer';
import ContenedorProyectos from './Components/ContenedorProyectos/ContenedorProyectos';

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
      <button className='btn' onClick={handleClick}><i className="fa-solid fa-circle-half-stroke"></i>Dark/Light</button>
      <IntroContainer />
      <ContenedorProyectos />
    </div>
  );
}

export default App;

