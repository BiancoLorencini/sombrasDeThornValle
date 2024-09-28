import React, { useState, useEffect } from 'react'
import style from './comeco.module.css'
import Cards from '../../components/cards/Cards.jsx' 
import introImg01 from '../../assets/prologoImg/inicio013D.gif'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'

const comeco = () => {

  const [openPopUp, setOpenPopUp] = useState(false);

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
  };


  return (
  <>
    <div>
      <TextBackground onClick={handlePopUp} >
      É  uma manhã radiante de outono. O sol brilha alto no céu, lançando seus raios dourados sobre os vastos campos fora dos muros da grande cidade. O ar está fresco e cheio do aroma das colheitas recém-cortadas. Ao longe, vocês ouvem o som animado de risos e conversas, entremeados pelo suave tilintar de um alaúde, uma flauta doce e o ritmado batucar de tambores. 
      
      </TextBackground>
      <img className={style.introImg01} src={introImg01} alt="" /> 
    </div>
    {openPopUp && 
        <div className={style.planilhaPopUp}>
          <PlanilhaComponent />
        </div>
    }
  </>
  )
}

export default comeco
