import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prologo from '../components/prologo/prologoGame.jsx'
import LoginScreen from '../pages/LoginScreen.jsx'
import PlayerChoose from '../pages/selecaoPersonagem/SelecaoPersonagem.jsx'
const AppRouter = () => {

  return (
    <Router>
      <Routes>
      <Route path="*" element={<LoginScreen to="/" />} />
        <Route path="/prologo" element={<Prologo />} />
        <Route path="/playerChoose" element={<PlayerChoose />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
