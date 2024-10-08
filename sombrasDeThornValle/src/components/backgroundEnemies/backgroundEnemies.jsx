import React , { useState, useEffect } from 'react'
import style from './backgroundEnemies.module.css'
import javali from '../../assets/imgDiaSeguinte/javali.png'
import saqueador from '../../assets/randomBandits/saqueador.png'
import saqueador01 from '../../assets/randomBandits/saqueador01.png'
import saqueador02 from '../../assets/randomBandits/saqueador02.png'
import saqueador03 from '../../assets/randomBandits/saqueadora03.png'
import saqueador04 from '../../assets/randomBandits/saqueador04.png'
import bandido from '../../assets/randomBandits/bandido.png'
import bandido01 from '../../assets/randomBandits/bandido01.png'
import bandido02 from '../../assets/randomBandits/bandido02.png'
import bandido03 from '../../assets/randomBandits/bandido03.png'
import bandido04 from '../../assets/randomBandits/bandido04.png'
import bandido05 from '../../assets/randomBandits/bandido05.png'
import guarda from '../../assets/randomBandits/guarda.png'
import guarda01 from '../../assets/randomBandits/guarda01.png'
import guarda02 from '../../assets/randomBandits/guarda02.png'
import soldado from '../../assets/randomBandits/soldado.png'
import soldado01 from '../../assets/randomBandits/soldado01.png'
import soldado02 from '../../assets/randomBandits/soldado02.png'
import soldado03 from '../../assets/randomBandits/soldado03.png'
import soldado04 from '../../assets/randomBandits/soldado04.png'
import soldadosDamien from '../../assets/randomBandits/soldadosDamien.png'
import dorian from '../../assets/randomBandits/dorian.png'
import vortigern from '../../assets/randomBandits/vortigern.png'
import lordDamian from '../../assets/randomBandits/lordDamian.png'
import { db } from '../../config/firebaseConfig'
import { ref, set, get, update } from 'firebase/database';


const BackgroundEnemies = ( {enemieName} ) => {
  const [enemies, setEnemies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, 'inimigo');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          console.log('Inimigos:', snapshot.val());
          console.log('Dados do Firebase:', snapshot.val());
          setEnemies(snapshot.val());
        } else {
          console.log('Nenhum dado disponível');
        }
      } catch (error) {
        console.error('Erro ao buscar inimigos:', error);
      }
    }

    fetchData();
  }, [ enemieName ]);

  const getImagemInimigo = (inimigo) => {
    switch (inimigo) {
      case 'javali':
        return javali
      case 'saqueador':
        return saqueador
      case 'bandido':
        return bandido
      case 'guardaCostas':
        return guarda
      case 'soldado':
        return soldado
      case 'soldadosDamien':
        return soldadosDamien
      case 'dorian':
        return dorian
      case 'vortigern':
        return vortigern
      case 'lordDamian':
        return lordDamian
      default:
        return null
    }
  }

  const filteredEnemies = enemies
    ? Object.entries(enemies).filter(([key, value]) => key === enemieName)
    : [];


  return (
    <>
      {filteredEnemies.length > 0 ? (filteredEnemies.map(([key, value]) => (
          <div key={key} className={style.sheetEnemies}>
              <div className={style.scrollFlag} ><h3>Inimigos</h3></div>
              <div className={style.enemiesContainer}>
                <div className={style.containerEnemiesLeft}>
                  <img src={getImagemInimigo(key)} alt={key} />
                  <h3>{key.toUpperCase()}</h3>
                  <div className={style.containerInput}>
                    <div className={style.inputContainer1}>
                      <label htmlFor="">Habilidade</label>
                      <input value={value.habilidade} type="number" readOnly />
                    </div>
                    <div className={style.inputContainer2}>
                      <label htmlFor="">Vida</label>
                      <input value={value.vida} type="number" readOnly />
                    </div>
                  </div>
                </div>
                <div className={style.containerEnemiesRight}>
                    <p>
                      {value.ref}
                    </p>
                </div>
              </div>
            </div>
        ))
      ) : (
        <p>Nenhum inimigo encontrado</p>
      )} 
    </>
    )
}

export default BackgroundEnemies
