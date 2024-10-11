import React , { useState, useEffect, useRef } from 'react'
import style from './combatePagina.module.css'
import particleFire from '../../assets/videoRandom/particlesFire.mp4'
import PlanilhaComponent from '../planilhaCompInGame/planilhaComponent.jsx'
import EnemiePlanilha from '../backgroundEnemies/backgroundEnemies.jsx'
import VideoButton from '../videoButton/VideoButton.jsx'
import audioAttack from '../../assets/sound/swordHit.mp3'

const CombatePagina = ({ enemieName, onClick }) => {
  const [fadeInPersonagem, setFadeInPersonagem] = useState(false);
  const [fadeInEnemie, setFadeInEnemie] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [attack, setAttack] = useState(false);
  const [attckEffect, setAttackEffect] = useState(false);


  useEffect(() => {
    setFadeInPersonagem(true);
    setFadeInEnemie(true);
    setZoomIn(true);
    setTimeout(() => {
      setAttack(true);
    } , 5000);
  }, []);

  const acerto = () => {
    setAttackEffect(true);
    const audioElement = new Audio(audioAttack);
    audioElement.play();
    setTimeout(() => {
      setAttackEffect(false);
    } , 500);
  }


  return (
    <div className={style.combatePagina}>
      <video src={particleFire} autoPlay loop muted className={style.video} />
      <div className={`${style.containerPlanilha} ${fadeInPersonagem ? style.fadeInPlanilha : ''}`}>
        <PlanilhaComponent />
        
      </div>
      {attack ? 
      <div className={style.ataqueButton}>
        <VideoButton onClick={acerto} title="Atacar" />
      </div> : null}
      <div className={`${style.containerCombateIcone} ${zoomIn ? style.zoomIn : ''}`}></div>
      <div className={`${style.containerEnemie} ${fadeInEnemie ? style.fadeInEnemie : ''}`}>
          <EnemiePlanilha enemieName={enemieName} />
        {attckEffect ? 
          <div className={style.attckEffect}></div> : null}
      </div>
    </div>
  )
}

export default CombatePagina
