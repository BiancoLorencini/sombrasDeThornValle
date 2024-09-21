// src/context/AppContext.js
import React from 'react';
import { DadoProvider } from '../Dice/DiceContext.jsx';
import { PersonagemProvider } from '../characterContext/PersonagemProvider.jsx';

const AppContextProvider = ({ children }) => {
  return (
    <PersonagemProvider>
      <DadoProvider>
        {children}
      </DadoProvider>
    </PersonagemProvider>
  );
};

export default AppContextProvider;