import React , { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './encontroElowen.module.css'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import Elowen from '../../assets/characters/elowen.png'
import imgEncontro from '../../assets/prologoImg/encontroElowen.png'
import arvoreEncontro from '../../assets/prologoImg/arvoreEncontro.png'

const EncontroElowen = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [window01, setWindow01] = useState(false);

  
  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
    setIsFading(!isFading);
  };

  const windowOpen1 = () => {
    setIsToggled(!isToggled);
  };
  const windowOpen2 = () => {
    setIsToggled2(!isToggled2);
  };
  
  
  return (
    <>
      <div className={isFading ? style.fadeOut : ''}>
        <TextBackground onClick={handlePopUp} >
        <p>  Em meio à celebração da colheita, você se destaca da multidão, até que os olhos de Elowen encontram os seus, brilhando com uma promessa silenciosa. Com um gesto delicado, ela te convida a segui-la até uma antiga árvore solitária, afastando-se do som distante da festa. Do belo entardecer até o anoitecer, seus sentimentos se revelam enquanto ela fala sobre o futuro e seus sonhos, muitos dos quais, ela confessa, te incluem. Em um momento íntimo e sincero, ela expressa seu desejo de que, apesar das incertezas da vida, você permaneça ao seu lado, compartilhando juntos o que o futuro reserva.
        O momento é marcado por uma conexão profunda e sincera, um encontro de vulnerabilidade e esperança, tornando-se um momento inesquecível.</p>
        </TextBackground>
      </div>
    <div className={style.flagScrollTop}>
      <p>Prólogo</p>
      <h1>"Ecos da Praga" </h1>
    </div>
    <div className={style.containerImageBoard}>
      <div className={style.mapaContainer}>
        <img onClick={windowOpen1} className={`${style.imgFlow} ${isToggled ? style.toggleActive : ''}`}  src={arvoreEncontro} alt="" />
        {window01 &&
          <div className={`${style.window01Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img onClick={windowOpen2} className={`${style.imgPersonagens} ${isToggled2 ? style.toggleActive2 : ''}`} src={Elowen} alt=""/>
            <img src={arvoreEncontro} alt="" />
          </div>
        }
      </div>
      <button className={style.buttonChoiceA}>Continuar</button>
    </div>
    {openPopUp && 
        <div className={style.planilhaPopUp}>
          <PlanilhaComponent />
        </div>
    }
  </>
  )
}

export default EncontroElowen
