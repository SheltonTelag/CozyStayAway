import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './pgns/Login/Login.jsx'
import Registro from './pgns/registro/Registro.jsx'
import Home from './pgns/Home/Home.jsx'
import Chat from './pgns/Chat/Chat.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
