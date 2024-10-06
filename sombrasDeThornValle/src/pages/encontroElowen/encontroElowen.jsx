import React , { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './encontroElowen.module.css'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import Elowen from '../../assets/characters/elowen.png'
import imgEncontro from '../../assets/prologoImg/encontroElowen.png'
import arvoreEncontro from '../../assets/prologoImg/arvoreEncontro.png'
import caminhoArvore from '../../assets/prologoImg/treeElowen.png'
import noiteEncontro from '../../assets/prologoImg/moonElowen.jpg'

const EncontroElowen = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [window01, setWindow01] = useState(false);
  const [timed, setTimed] = useState(false);
  const [relocation, setRelocation] = useState(false);
  const [openCaminhoArvore, setOpenCaminhoArvore] = useState(false);
  const [flip, setFlip] = useState(false);
  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
  };

  const windowOpen1 = () => {
    setIsToggled(!isToggled);
    setWindow01(!window01);
    setRelocation(!relocation);
    setOpenCaminhoArvore(false);
    setFlip(false);
  };
  const windowOpen2 = () => {
    setOpenCaminhoArvore(!openCaminhoArvore);
    setFlip(!flip);
  };
  
  return (
    <>
      <div className={isFading ? style.fadeOut : ''}>
        <TextBackground onClick={handlePopUp} >
        <p>  Em meio à celebração da colheita, você se destaca da multidão, até que os olhos de Elowen encontram os seus, brilhando com uma promessa silenciosa. Com um gesto delicado, ela te convida a segui-la até uma antiga árvore solitária,"um lugar secreto", afastando-se do som distante da festa. Do belo entardecer até o anoitecer, seus sentimentos se revelam enquanto ela fala sobre o futuro e seus sonhos, muitos dos quais, ela confessa, te incluem. Em um momento íntimo e sincero, ela expressa seu desejo de que, apesar das incertezas da vida, você permaneça ao seu lado, compartilhando juntos o que o futuro reserva.
        O momento é marcado por uma conexão profunda e sincera, um encontro de vulnerabilidade e esperança, tornando-se um momento inesquecível.</p>
        </TextBackground>
      </div>
    <div className={style.flagScrollTop}>
      <p>Prólogo</p>
      <h1>"Ecos da Praga" </h1>
    </div>
    <div className={style.containerImageBoard}>
      <div className={style.mapaContainer}>
        <img onClick={windowOpen1} className={`${style.imgFlow} ${isToggled ? style.toggleActive : ''} ${relocation ? style.relocation : style.relocationBack}`}  src={arvoreEncontro} alt="" />
        {window01 &&
          <>
            <img onClick={windowOpen2} className={`${style.imgPersonagens} ${openCaminhoArvore ? style.openCaminhoArvore : ''}`} src={caminhoArvore} alt=""/>
            {flip && 
              <div onClick={windowOpen2} className={style.caminhoArvoreBack}>
                <p>"Eu... queria ter um momento longe de toda a agitação," <br />  <span>ela fala com uma voz suave e sincera.</span> </p> <p>-Elowen</p>
              </div>
            }
            <div className={style.caminhoArvoreEscolha}>
              <p>Momento de Escolha</p>
              <hr />
              <p>...ela faz uma pausa, olhando para o céu    estrelado por um momento antes de voltar seus olhos para você. <br /> <span>-"Eu tenho pensado muito sobre o futuro,"</span> <br /> ela continua. <br /> <span>-"Sobre o que eu quero para mim, para minha vida... e percebi que muitas das minhas esperanças e sonhos têm você nelas."</span> <br />
              Você sente o calor subir em suas bochechas, o coração acelerando com as palavras dela...
              </p>
              <hr />
              <div className={style.caminhoArvoreEscolhaButtons}>
                <div className={style.caminhoArvoreEscolhaButtonsDiv}>
                  <button>Opção 1</button>
                  <p>Ser reciproco</p>
                </div>
                <p>ou</p>
                <div className={style.caminhoArvoreEscolhaButtonsDiv}>
                  <button>Opção 2</button>
                  <p>Voltar para a festa</p>
                </div>
              </div>
            </div>
          </>
        }
        
      </div>
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
