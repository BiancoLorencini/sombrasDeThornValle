import React , { useState, useEffect, useRef, useCallback } from 'react'
import style from './combatePagina.module.css'
import particleFire from '../../assets/videoRandom/particlesFire.mp4'
import PlanilhaComponent from '../planilhaCompInGame/planilhaComponent.jsx'
import EnemiePlanilha from '../backgroundEnemies/backgroundEnemies.jsx'
import VideoButton from '../videoButton/VideoButton.jsx'
import audioAttack from '../../assets/sound/swordHit.mp3'
import ATBBar from '../../components/actionTimeBar/actionTimeBar.jsx'
import musicCombate02 from '../../assets/music/combate02.mp3'
import musicCombate from '../../assets/music/combateMain.mp3'
import musicCombate01 from '../../assets/music/combate01.mp3'

const CombatePagina = ({ enemieName, onClick }) => {
  const [fadeInPersonagem, setFadeInPersonagem] = useState(false);
  const [fadeInEnemie, setFadeInEnemie] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [attack, setAttack] = useState(false);
  const [attckEffect, setAttackEffect] = useState(false);
  const [availableAction, setAvailableAction] = useState(false);
  const [reset, setReset] = useState(false);
  const musicaAleatoria = [musicCombate, musicCombate01, musicCombate02]
  const [musica, setMusica] = useState(musicaAleatoria[Math.floor(Math.random() * 3)]);

  const onActionAvailable = useCallback(() => {
    setAvailableAction(true);
  } , [ setAvailableAction ]);

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
    setAvailableAction(false);
    const audioElement = new Audio(audioAttack);
    audioElement.play();
    if (availableAction) {
      setReset(true);
      setTimeout(() => {
        setReset(false);
      },100)
    }
    setTimeout(() => {
      setAttackEffect(false);
    } , 3000);
  }

  useEffect(() => {
      const audioElement = new Audio(musica);
      audioElement.play();
      audioElement.volume = 0.2;
  }, []);

  return (
    <div className={style.combatePagina}>
      <video src={particleFire} autoPlay loop muted className={style.video} />
      <div className={style.containerCombateATB}>
        <ATBBar habilidade={19} onActionAvailable={onActionAvailable} reset={reset} />
      </div>
      <div className={`${style.containerPlanilha} ${fadeInPersonagem ? style.fadeInPlanilha : ''}`}>
        <PlanilhaComponent />
      </div>
      {attack ? 
      <div  className={`${style.ataqueButton} ${!availableAction ? style.disabled : ''} `}>
        <VideoButton onClick={acerto} title="Defender" />
        <VideoButton onClick={onClick} title="Magia" />
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
