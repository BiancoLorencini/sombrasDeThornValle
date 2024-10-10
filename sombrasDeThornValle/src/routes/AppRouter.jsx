import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prologo from '../components/prologo/PrologoGame'
import LoginScreen from '../pages/LoginScreen.jsx'
import PlayerChoose from '../../src/pages/selecaoPersonagem/selecaoPersonagem.jsx'
import Planilha from '../components/planilhaPersonagem/planilha.jsx';
import Comeco from '../pages/comeco/comeco.jsx';
import AppContextProvider from '../context/appContext/AppContextProvider.jsx';
import Festa from '../pages/colheita/festaColheita.jsx'
import Encontro from '../pages/encontroElowen/encontroElowen.jsx'
import DiaSeguinte from '../pages/oDiaSeguinte/diaSeguinte.jsx';
import CombatePagina from '../components/combate/combatePagina.jsx'





const AppRouter = () => {

  return ( 
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="*" element={<LoginScreen to="/" />} />
          <Route path="/prologo" element={<Prologo />} />
          <Route path="/playerChoose" element={<PlayerChoose />} />
          <Route path="/planilha" element={<Planilha />} />
          <Route path="/comeco" element={<Comeco />} />
          <Route path="/colheita" element={<Festa />} />
          <Route path="/encontro" element={<Encontro />} />
          <Route path="/diaSeguinte" element={<DiaSeguinte />} />
          <Route path="/combate" element={<CombatePagina />} />
        </Routes>
      </Router>
    </AppContextProvider>
  )
}

export default AppRouter
