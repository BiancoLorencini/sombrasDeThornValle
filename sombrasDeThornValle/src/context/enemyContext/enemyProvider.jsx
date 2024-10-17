import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { ref, set, get, update } from 'firebase/database'

const EnemyContext = createContext();

const EnemyProvider = ( { children } ) => {
  const [enemies, setEnemies] = useState({})
  const [dmgReceived, setDmgReceived] = useState(0)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, 'inimigo');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setEnemies(snapshot.val());
        } else {
          console.log('Nenhum dado disponível');
        }
      } catch (error) {
        console.error('Erro ao buscar inimigos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <EnemyContext.Provider
      value={{
        enemies,
        setEnemies,
        dmgReceived,
        setDmgReceived
      }}
    >
      {children}
    </EnemyContext.Provider>
  )
}

export { EnemyContext, EnemyProvider }
