import React , { useState, useEffect, useCallback, useContext, useRef } from 'react'
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
import { PersonagemContext } from '../../context/characterContext/PersonagemProvider.jsx'
import { EnemyContext, EnemyProvider } from '../../context/enemyContext/enemyProvider.jsx'
import { db } from '../../config/firebaseConfig.js'
import { ref, set, get, update } from 'firebase/database';

const CombatePagina = ({ enemieName, onClick }) => {
  const { enemies } = useContext(EnemyContext);
  const { personagem, atualizarConstituicao } = useContext(PersonagemContext);
  const danoEnemie = enemies[enemieName].dano
  const enemieVida = enemies[enemieName].vida
  const [fadeInPersonagem, setFadeInPersonagem] = useState(false);
  const [fadeInEnemie, setFadeInEnemie] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [attack, setAttack] = useState(false);
  const [enemyAttack, setEnemyAttack] = useState(false);
  const [enemyAvailableAction, setEnemyAvailableAction] = useState(false);
  const [attckEffect, setAttackEffect] = useState(false);
  const [enemyAttckEffect, setEnemyAttackEffect] = useState(false);
  const [availableAction, setAvailableAction] = useState(false);
  const [reset, setReset] = useState(false);
  const [enemyReset, setEnemyReset] = useState(false);
  const musicaAleatoria = [musicCombate, musicCombate, musicCombate01, musicCombate02]
  const [musica, setMusica] = useState(musicaAleatoria[Math.floor(Math.random() * 3)]);
  const [renderAtbBar, setRenderAtbBar] = useState(false);
  const [vidaPersonagem, setVidaPersonagem] = useState(personagem.atributo.constituicao);

  const onActionAvailable = useCallback(() => {
    setAvailableAction(true);
  } , [ setAvailableAction ]);

  const onEnemyActionAvailable = useCallback(() => {
    setEnemyAvailableAction(true);
  } , [ setEnemyAvailableAction ]);

  useEffect(() => {
    setFadeInPersonagem(true);
    setFadeInEnemie(true);
    setZoomIn(true);
    setTimeout(() => {
      setAttack(true);
      setRenderAtbBar(true);
    } , 5000);
  }, []);

  const acerto = () => {
    setAttackEffect(true);
    setAvailableAction(false);
    const audioElement = new Audio(audioAttack);
    audioElement.play();
    audioElement.volume = 0.8;
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
    if ( enemyAvailableAction ) {

      function enemyAcerto() {{
        setEnemyAttackEffect(true);
        const audioElement = new Audio(audioAttack);
        audioElement.play();
        audioElement.volume = 0.8;
        console.log(vidaPersonagem - danoEnemie);
        if (enemyAvailableAction) {
          setTimeout(() => {
            setEnemyReset(true);
          } , 1000);
          setTimeout(() => {
            setEnemyReset(false);
          },100)
        }
        setEnemyAvailableAction(false);
        setTimeout(() => {
          setEnemyAttackEffect(false);
        } , 3000);
      } }
      enemyAcerto();
      const novoValorConstituicao = vidaPersonagem - danoEnemie;
      atualizarConstituicao({ constituicao: novoValorConstituicao });
      setVidaPersonagem(novoValorConstituicao);
    }
  } , [ enemyAvailableAction, setEnemyAvailableAction, danoEnemie, vidaPersonagem ]);

  useEffect(() => {
      const audioElement = new Audio(musica);
      audioElement.play();
      audioElement.volume = 0.1;
      audioElement.loop = true;
  }, []);

  const anyNumber = 16;

  return (
    <div className={style.combatePagina}>
      <video src={particleFire} autoPlay loop muted className={style.video} />
      {renderAtbBar ? 
        <div className={style.containerCombateATB}>
          <div className={style.playerCombateATBBar}>
            <ATBBar habilidade={personagem.atributo.habilidade} onActionAvailable={onActionAvailable} reset={reset} />
          </div>
          <div className={style.containerDiceRoll}>
            <div className={style.diceRollPlayer}>
              <input type="text" value={anyNumber}  readOnly />
              <label>Resultado Player</label>
            </div>
            <p>VS</p>
            <div className={style.diceRollEnemie}>
              <input type="text" value={anyNumber}  readOnly />
              <label>Resultado Inimigo</label>
            </div>
          </div>
          <div className={style.enemieCombateATBBar}>
            <ATBBar habilidade={enemies[enemieName].habilidade} onActionAvailable={onEnemyActionAvailable} reset={enemyReset} />
          </div>
        </div> : null}
      <div className={`${style.containerPlanilha} ${fadeInPersonagem ? style.fadeInPlanilha : ''}`}>
        <PlanilhaComponent />
        {enemyAttckEffect ? 
          <div className={style.enemyAttckEffect}></div> : null}
      </div>
      {attack ? 
      <div  className={`${style.ataqueButton} ${!availableAction ? style.disabled : ''} `}>
        <VideoButton onClick={acerto} title="Defender" />
        <VideoButton onClick={onClick} title="Magia" />
        <VideoButton onClick={acerto} title="Atacar" />
      </div> : null}
      <div className={`${style.containerEnemie} ${fadeInEnemie ? style.fadeInEnemie : ''}`}>
          <EnemiePlanilha enemieName={enemieName} />
        {attckEffect ? 
          <div className={style.attckEffect}></div> : null}
      </div>
    </div>
  )
}

export default CombatePagina
