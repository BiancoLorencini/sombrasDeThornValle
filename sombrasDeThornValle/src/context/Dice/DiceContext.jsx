import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const DadoContext = createContext();

// Função para rolar um dado de N lados
const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

// Provider para envolver o app
export const DadoProvider = ({ children }) => {
  const [dado, setDado] = useState(1);

  // Função para rolar um dado ou múltiplos dados
  const rollDice = (numDice = 1, sides = 6) => {
    const results = [];
    for (let i = 0; i < numDice; i++) {
      results.push(rollDie(sides));
    }
    return results.length === 1 ? results[0] : results; // Retorna o valor único ou uma array de valores
  };

  return (
    <DadoContext.Provider value={{ dado, rollDice }}>
      {children}
    </DadoContext.Provider>
  );
};

// Hook para usar o contexto
export const useDado = () => useContext(DadoContext);
