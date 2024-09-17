import React, { createContext, useState, useContext } from 'react';

const DadoContext = createContext();

export const DadoProvider = ({ children }) => {
  const [dado, setDado] = useState(1);

  const rollDice = (numDice = 1, sides = 6) => {
    const results = [];
    for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * sides) + 1);
      setDado(Math.floor(Math.random() * sides) + 1);
    }
    return results.length === 1 ? results[0] : results; 
  };

  return (
    <DadoContext.Provider value={{ dado, rollDice }}>
      {children}
    </DadoContext.Provider>
  );
};

export const useDado = () => useContext(DadoContext);
