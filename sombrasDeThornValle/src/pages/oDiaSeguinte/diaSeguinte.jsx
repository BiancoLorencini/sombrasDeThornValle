import React , { useState, useEffect, useRef  } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './diaSeguinte.module.css'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent'
import EnemieBackground from '../../components/backgroundEnemies/backgroundEnemies.jsx'
import Combate from '../../components/combate/combatePagina.jsx'
import MortePersonagem from '../../components/mortePersonagem/mortePersonagem.jsx'
import musicCombate02 from '../../assets/music/combate02.mp3'
import musicCombate from '../../assets/music/combateMain.mp3'
import musicCombate01 from '../../assets/music/combate01.mp3'


const DiaSeguinte = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [combate, setCombate] = useState(false);
  const musicaAleatoria = [musicCombate, musicCombate01, musicCombate02]
  const [musica, setMusica] = useState(musicaAleatoria[Math.floor(Math.random() * 3)]);
  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
  };

  const testeCombate = () => {
    setCombate(true);
  };

  useEffect(() => {
    if (combate) {
      const audioElement = new Audio(musica);
      audioElement.play();
    } else {
      const audioElement = new Audio(musicCombate02);
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }, []);


  return (
    <>
      <div className={`${style.containerText} ${fadeOut ? style.fadeOut : style.fadeIn}`}>
        <TextBackground onClick={handlePopUp} >
        <p>O  sol se levanta, dourando a vila e trazendo uma brisa fresca. Você, com a lança firmemente empunhada — o presente de seu pai, Aldric — sente o peso da responsabilidade enquanto verifica as ovelhas e os cavalos. A manhã parece tranquila até que um grito rompe o silêncio. É Dorian, e sua voz carrega um tom desesperado. Correndo até ele, você vê Dorian e Elowen apontando para Freya, que caminha distraída em direção a um matagal denso, alheia ao perigo iminente.
        À frente de Freya, um enorme javali selvagem surge, seus olhos cheios de fúria. O animal se prepara para atacar, e o tempo parece congelar por um instante. Cada batida do seu coração ecoa na sua mente — você sabe que não pode hesitar. A vida de Freya depende de sua ação imediata.</p>
        </TextBackground>
      </div>
      <div className={style.flagScrollTop}>
        <p>Prólogo</p>
        <h1>"Ecos da Praga" </h1>
      </div>
      <div className={style.containerImageBoard}>
        <button onClick={testeCombate}>Teste Combate</button>
        <div className={style.mapaContainer}>
          
        </div>
      </div>
      {openPopUp && 
          <div className={` ${style.planilhaPopUp} ${fadeIn ? style.fadeIn : ''}`}>
            <PlanilhaComponent />
          </div>
      }
      {combate &&
            <MortePersonagem />
      }
    </>
    )
}

export default DiaSeguinte
