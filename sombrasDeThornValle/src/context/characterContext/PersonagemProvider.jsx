import React, { createContext, useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { ref, onValue, update } from 'firebase/database';

const PersonagemContext = createContext();

const PersonagemProvider = ({ children }) => {
  const [personagem, setPersonagem] = useState(null); 

  const atualizarConstituicao = (novaConstituicao) => {
    const dbRef = ref(db, 'personagem/atributo');
    update(dbRef, novaConstituicao)
      .then(() => {
        console.log('Constituição atualizada com sucesso no Firebase');
      })
      .catch((error) => {
        console.error('Erro ao atualizar constituição:', error);
      });
  };

  useEffect(() => {
    const dbRef = ref(db, 'personagem');
    
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setPersonagem(snapshot.val());
      } else {
        console.log('Nenhum dado disponível.');
        setPersonagem(null); 
      }
    }, (error) => {
      console.error('Erro ao buscar personagem:', error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <PersonagemContext.Provider value={{ personagem, atualizarConstituicao }}>
      {children}
    </PersonagemContext.Provider>
  );
};

export { PersonagemContext, PersonagemProvider as default };
