import React , { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './encontroElowen.module.css'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import Elowen from '../../assets/characters/elowen.png'
import arvoreEncontro from '../../assets/prologoImg/arvoreEncontro.png'
import caminhoArvore from '../../assets/prologoImg/treeElowen.png'
import noiteEncontro2 from '../../assets/prologoImg/opcao1Encontro02.png'
import noiteEncontro3 from '../../assets/prologoImg/opcao1Encontro03.png'
import videoEncontro from '../../assets/videoRandom/encontroElowen.mp4'
import primeiroEncontro from '../../assets/music/firstDate.mp3'
import flipPage from '../../assets/sound/flipPage.mp3'
import write from '../../assets/sound/write.mp3'
import closeBook from '../../assets/sound/closingBook01.mp3'


const EncontroElowen = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [window01, setWindow01] = useState(false);
  const [timed, setTimed] = useState(false);
  const [relocation, setRelocation] = useState(false);
  const [openCaminhoArvore, setOpenCaminhoArvore] = useState(false);
  const [flip, setFlip] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [goodNight, setGoodNight] = useState(false);
  const [goodDay, setGoodDay] = useState(false);
  const handlePopUp = () => {
    if (openPopUp) {
      const bookSound = new Audio(closeBook);
      bookSound.play();
      bookSound.volume = 0.5;
    } else {
      const bookSound = new Audio(flipPage);
      bookSound.play();
      bookSound.volume = 0.5;
    }
    setOpenPopUp(!openPopUp);
  };


  const windowOpen1 = () => {
    setIsToggled(!isToggled);
    setWindow01(!window01);
    setRelocation(!relocation);
    setOpenCaminhoArvore(false);
    setFlip(false);
    const audio = new Audio(flipPage);
    audio.play();
    audio.volume = 0.5;
  };
  const windowOpen2 = () => {
    setOpenCaminhoArvore(!openCaminhoArvore);
    setFlip(!flip);
    const audio = new Audio(flipPage);
    audio.play();
    audio.volume = 0.5;
  };

  const opcao1Elowen = () => {
    const audio = new Audio(write);
    audio.play();
    audio.volume = 0.5;
    setTimed(!timed);
    setDisabled(true)
    setOverlay(true)
    setTimeout(() => {
      setGoodNight(true)
      setTimeout(() => {
        navigate('/diaSeguinte');
      }, 23000)
    } , 2000)
  }

  const opcao2Elowen = () => {
    const audio = new Audio(write);
    audio.play();
    audio.volume = 0.5;
    setDisabled(true)
    setTimeout(() => {
      setGoodDay(true)
      setWindow01(false)
      setTimeout(() => {
        navigate('/diaSeguinte');
      }, 25200)
    }, 800)
  }

  useEffect(() => {
    const audioElement = new Audio(primeiroEncontro);
    audioElement.play();
    audioElement.volume = 0.1;
    return () => {
      audioElement.pause();
    };
  }, []);
  
  return (
    <>
      <div className={isFading ? style.fadeOut : ''}>
        <TextBackground onClick={handlePopUp} >
        <p>...após muito dançar e cantar, você se afastaum pouco da multidão, até que os olhos de Elowen encontram os seus, brilhando com uma promessa silenciosa. Com um gesto delicado, ela te convida a segui-la até uma antiga árvore solitária, -"um lugar secreto" ela diz no caminho, afastando-se do som distante da festa. Do belo entardecer até o anoitecer, seus sentimentos se revelam enquanto ela fala sobre o futuro e seus sonhos, muitos dos quais, ela confessa, te incluem. Em um momento íntimo e sincero, ela expressa seu desejo de que, apesar das incertezas da vida, você permaneça ao seu lado, compartilhando juntos o que o futuro reserva.
        O momento é marcado por uma conexão profunda e sincera, um encontro de vulnerabilidade e esperança, tornando-se um momento inesquecível.</p>
        </TextBackground>
      </div>
    <div className={style.flagScrollTop}>
      <p>Prólogo</p>
      <h1>"Ecos da Praga" </h1>
    </div>
    <div className={style.containerImageBoard}>
      {goodDay &&
        <div className={style.videoNoiteEncontro2}>
        <video src={videoEncontro} autoPlay></video>
      </div>
      }
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
              <p>...ela faz uma pausa, olhando para o céu    estrelado por um momento antes de voltar os olhos para você. <br /> <span>-"Eu tenho pensado muito sobre o futuro,"</span> <br /> ela continua. <br /> <span>-"Sobre o que eu quero para mim, para minha vida... e percebi que muitas das minhas esperanças e sonhos têm você nelas."</span> <br />
              Você sente o calor subir em suas bochechas, o coração acelerando com as palavras dela...
              </p>
              <hr />
              <div className={style.caminhoArvoreEscolhaButtons}>
                <div className={style.caminhoArvoreEscolhaButtonsDiv}>
                  <button onClick={opcao1Elowen} disabled={disabled}>Opção 1</button>
                  <p>Ser recíproco</p>
                </div>
                <p>ou</p>
                <div className={style.caminhoArvoreEscolhaButtonsDiv}>
                  <button onClick={opcao2Elowen} disabled={disabled}>Opção 2</button>
                  <p>Voltar para a festa</p>
                </div>
              </div>
            </div>
            {timed &&
              <div className={style.caminhoArvoreTimed}>
                <img src={noiteEncontro2} alt="" />
                <div className={style.imgsNoiteEncontro}>
                  <div className={style.videoNoiteEncontro}>
                    <video src={videoEncontro} autoPlay></video>
                  </div>
                  <p>(+1 Sorte Máxima)</p>
                  <img src={noiteEncontro3} alt="" />
                </div>
              </div>
            }
          </>
        }
      </div>
    </div>
    {goodDay &&
    <>
      <div className={style.overlay}></div>
      <TextBackground>...ao final da noite alegria e paz se misturam com a tristeza de Elowen, que é palpável enquanto ela olha para as brasas da fogueira. A atmosfera é de incerteza, com estrelas brilhantes, acordes musicais suaves e abraços calorosos. Você se despede, questionando se fez a escolha certa. O dia termina com a certeza de que será lembrado por muitos anos, especialmente as escolhas...
      </TextBackground>
    </>
    }
    {openPopUp && 
        <div className={style.planilhaPopUp}>
          <PlanilhaComponent />
        </div>
    }
    {overlay &&
      <>
        <div className={style.overlay}></div>
        {goodNight &&
          <TextBackground>...ao voltar para casa, o som do vento e as lembranças da noite marcaram o fim perfeito de um dia memorável. Com um suspiro, você sussurra: " Boa noite, Elowen... "
          </TextBackground>
        }
      </>
    }
  </>
  )
}

export default EncontroElowen
