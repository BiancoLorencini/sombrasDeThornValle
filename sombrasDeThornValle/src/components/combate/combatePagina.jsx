import React , { useState, useEffect } from 'react'
import style from './combatePagina.module.css'
import particleFire from '../../assets/videoRandom/particlesFire.mp4'
import PlanilhaComponent from '../planilhaCompInGame/planilhaComponent.jsx'
import EnemiePlanilha from '../backgroundEnemies/backgroundEnemies.jsx'

const CombatePagina = ({ enemieName }) => {
  const [fadeInPersonagem, setFadeInPersonagem] = useState(false);
  const [fadeInEnemie, setFadeInEnemie] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);


  useEffect(() => {
    setFadeInPersonagem(true);
    setFadeInEnemie(true);
    setZoomIn(true);
  }, []);



  return (
    <div className={style.combatePagina}>
      <video src={particleFire} autoPlay loop muted className={style.video} />
      <div className={`${style.containerPlanilha} ${fadeInPersonagem ? style.fadeInPlanilha : ''}`}>
        <PlanilhaComponent />
      </div>
      <div className={`${style.containerCombateIcone} ${zoomIn ? style.zoomIn : ''}`}></div>
      <div className={`${style.containerEnemie} ${fadeInEnemie ? style.fadeInEnemie : ''}`}>
        <EnemiePlanilha enemieName={enemieName} />
      </div>
    </div>
  )
}

export default CombatePagina
