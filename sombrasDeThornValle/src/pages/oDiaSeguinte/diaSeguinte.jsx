import React , { useState, useEffect } from 'react'
import style from './diaSeguinte.module.css'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent'
import javali from '../../assets/imgDiaSeguinte/javali.png'
const FimFestaColheita = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  
  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
  };

  

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
        <div className={style.mapaContainer}>
          <div className={style.sheetEnemies}>
            <div className={style.scrollFlag} ><h3>Inimigos</h3></div>
            <div className={style.enemiesContainer}>
              <div className={style.containerEnemiesLeft}>
                <img src={javali} alt="" />
                <h3> Javali </h3>
                <div className={style.containerInput}>
                  <div className={style.inputContainer1}>
                    <label htmlFor="">Habilidade</label>
                    <input type="text" />
                  </div>
                  <div className={style.inputContainer2}>
                    <label htmlFor="">Constituição</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className={style.containerEnemiesRight}>
                  <p>Os javalis de ThornValle são conhecidos por sua ferocidade e tamanho impressionante. Esses animais, que habitam as florestas densas ao  
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openPopUp && 
          <div className={` ${style.planilhaPopUp} ${fadeIn ? style.fadeIn : ''}`}>
            <PlanilhaComponent />
          </div>
      }
    </>
    )
}

export default FimFestaColheita