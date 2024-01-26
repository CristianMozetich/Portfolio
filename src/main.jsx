import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IdiomaProvider } from './Context/idiomaContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  </React.StrictMode>,
)