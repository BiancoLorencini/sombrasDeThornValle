import React, { createContext, useState, useContext } from 'react';

const DadoContext = createContext();

export const DadoProvider = ({ children }) => {
  const [habilidade, setHabilidade] = useState(0);
  const [inteligencia, setInteligencia] = useState(0);
  const [constituicao, setConstituicao] = useState(0);
  const [sorte, setSorte] = useState(0);
  const [dado, setDado] = useState(1);
  const [rollCount, setRollCount] = useState({
    habilidade: 0,
    inteligencia: 0,
    constituicao: 0,
    sorte: 0,
  });

  const handleRoll = (attribute) => {
    let result;
    
    if (attribute === 'habilidade' && rollCount.habilidade < 3) {
      setTimeout(() => {
        result = rollDice(1, 6);
        setHabilidade(result);
      }, 1000);
      setRollCount(prev => ({ ...prev, habilidade: prev.habilidade + 1 }));
    } else if (attribute === 'inteligencia' && rollCount.inteligencia < 3) {
      setTimeout(() => {
        result = rollDice(1, 6);
        setInteligencia(result);
      } , 1000);
      setRollCount(prev => ({ ...prev, inteligencia: prev.inteligencia + 1 }));
    } else if (attribute === 'constituicao' && rollCount.constituicao < 3) {
      const rolls = rollDice(2, 6);
      const total = Array.isArray(rolls) ? rolls.reduce((sum, r) => sum + r, 0) : rolls; 
      setConstituicao(total);
      setRollCount(prev => ({ ...prev, constituicao: prev.constituicao + 1 }));
    } else if (attribute === 'sorte' && rollCount.sorte < 3) {
      setTimeout(() => {
        result = rollDice(1, 6);
        setSorte(result);
      } , 1000);
      setRollCount(prev => ({ ...prev, sorte: prev.sorte + 1 }));
    }
  };

  const rollDice = (numDice = 1, sides = 6) => {
    const results = [];
    for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * sides) + 1);
    }
    setDado(results[results.length - 1]);
    return results.length === 1 ? results[0] : results;
  };

  return (
    <DadoContext.Provider value={{ dado, rollDice, handleRoll, habilidade, inteligencia, constituicao, sorte, rollCount }}>
      {children}
    </DadoContext.Provider>
  );
};

export const useDado = () => useContext(DadoContext);
