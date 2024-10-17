import React, { createContext, useEffect, useState } from 'react';
import { db } from '../../config/firebaseConfig';
import { ref, onValue, update } from 'firebase/database';

const PersonagemContext = createContext();

const PersonagemProvider = ({ children }) => {
  const [personagem, setPersonagem] = useState(null); 

  const atualizarConstituicao = (novaConstituicao) => {
    const dbRef = ref(db, 'personagem/atributo/constituicao');
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
      console.log('Snapshot:', snapshot);
      if (snapshot.exists()) {
        setPersonagem(snapshot.val());
        console.log('Personagem:', snapshot.val());

      } else {
        console.log('Nenhum dado disponível.');
        setPersonagem(null); // Define como null se não houver dados
      }
    }, (error) => {
      console.error('Erro ao buscar personagem:', error);
    });

    // Cleanup: remover o listener ao desmontar o componente
    return () => unsubscribe();
  }, []); // O array de dependências é vazio, pois a função só deve rodar uma vez ao montar o componente

  return (
    <PersonagemContext.Provider value={{ personagem, atualizarConstituicao }}>
      {children}
    </PersonagemContext.Provider>
  );
};

export { PersonagemContext, PersonagemProvider as default };
