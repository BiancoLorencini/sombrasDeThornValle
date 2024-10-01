import React, { useState, useEffect } from 'react'
import style from './comeco.module.css'
import Cards from '../../components/cards/Cards.jsx' 
import introImg01 from '../../assets/prologoImg/inicio01.png'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import introImg02 from '../../assets/prologoImg/inicio02.png'
const comeco = () => {

  const [openPopUp, setOpenPopUp] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
    setFadeIn(!fadeIn);
  };


  return (
  <>
    <div className={style.containerText}>
      <TextBackground onClick={handlePopUp} >
      <p>É  uma manhã radiante de outono. O sol brilha alto no céu, lançando seus raios dourados sobre os vastos campos fora dos muros da grande cidade. O ar está fresco e cheio do aroma das colheitas recém-cortadas. Ao longe, vocês ouvem o som animado de risos e conversas, entremeados pelo suave tilintar de um alaúde, uma flauta doce e o ritmado batucar de tambores... </p>
      </TextBackground>
    </div>
    <div className={style.flagScrollTop}>
      <p>Prólogo</p>
      <h1>Ecos da Praga </h1>
    </div>
    <div className={style.containerImageBoard}>
      <div className={style.mapaContainer}>
        <img className={style.introImg01} src={introImg01} alt="" />
        <img className={style.introImg02} src={introImg02} alt="" />
      </div>
      <button className={style.buttonChoiceA}>Continuar</button>
    </div>
    {openPopUp && 
        <div className={` ${style.planilhaPopUp} ${fadeIn ? style.fadeIn : style.fadeOut}`}>
          <PlanilhaComponent />
        </div>
    }
  </>
  )
}

export default comeco
