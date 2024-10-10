import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { ref, get } from 'firebase/database'


const PersonagemContext = createContext();

const PersonagemProvider = ( { children } ) => {
  const [personagem, setPersonagem] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, 'personagem');
        const snapshot = await get(dbRef); 
        
        if (snapshot.exists()) {
          console.log('Personagem:', snapshot.val());
          console.log('Dados do Firebase:', snapshot.val());
          setPersonagem(snapshot.val());
        } else {
          console.log('Nenhum dado disponível.');
        }
      } catch (error) {
        console.error('Erro ao buscar personagem:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <PersonagemContext.Provider value={{ personagem }}>
      {children}
    </PersonagemContext.Provider>
  )
}

export { PersonagemContext, PersonagemProvider as default };
