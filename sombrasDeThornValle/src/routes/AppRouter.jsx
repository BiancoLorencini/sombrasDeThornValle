import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prologo from '../components/prologo/PrologoGame'
import LoginScreen from '../pages/LoginScreen.jsx'
import PlayerChoose from '../../src/pages/selecaoPersonagem/selecaoPersonagem.jsx'
import Planilha from '../components/planilhaPersonagem/Planilha.jsx'
const AppRouter = () => {

  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<LoginScreen to="/" />} />
        <Route path="/prologo" element={<Prologo />} />
        <Route path="/playerChoose" element={<PlayerChoose />} />
        <Route path="/planilha" element={<Planilha />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
