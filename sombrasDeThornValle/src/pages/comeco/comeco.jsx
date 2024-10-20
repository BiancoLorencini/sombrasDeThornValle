import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './comeco.module.css'
import introImg01 from '../../assets/prologoImg/inicio01.png'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import introImg02 from '../../assets/prologoImg/inicio02.png'
import comecoSound from '../../assets/music/comecoSound.mp3'
import flipPage from '../../assets/sound/flipPage.mp3'
import closeBook from '../../assets/sound/closingBook01.mp3'
const Comeco = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [window01, setWindow01] = useState(false);
  const [window02, setWindow02] = useState(false);

  

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
    setFadeIn(!fadeIn);
  };

  const windowOpen1 = () => {
    setWindow01(!window01);
    setIsToggled(!isToggled);
    setWindow02(false)
    setIsToggled2(false)
    const audio = new Audio(flipPage);
    audio.play();
    audio.volume = 0.5;
  };


  const windowOpen2 = () => {
    setWindow02(!window02);
    setIsToggled2(!isToggled2);
    setIsToggled(false)
    setWindow01(false)
    const audio = new Audio(fliPage);
    audio.play();
    audio.volume = 0.5;
  };

  const festaColheita = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/colheita');
    }, 800);
  };

  useEffect(() => {
    const audioElement = new Audio(comecoSound);
    audioElement.volume = 0.3;
    audioElement.play();
    return () => {
      audioElement.pause();
    };
  }, []);

  useEffect(() => {
    setIsFading(true);
  }, []);

  return (
  <>
    <div className={`${isFading ? style.fadeInEntrance : ''}`}>
      <div className={`${style.containerText} ${fadeOut ? style.fadeOut : style.fadeIn}`}>
        <TextBackground onClick={handlePopUp} >
        <p>É  uma manhã radiante de outono. O sol brilha alto no céu, lançando seus raios dourados sobre os vastos campos de  FrondeLume, fora dos muros da grande cidade de ThornValle. O ar está fresco e cheio do aroma das colheitas recém-cortadas. Ao longe, vocês ouvem o som animado de risos e conversas, entremeados pelo suave tilintar de um alaúde, uma flauta doce e o ritmado batucar de tambores... </p>
        </TextBackground>
      </div>
      <div className={style.flagScrollTop}>
        <p>Prólogo</p>
        <h1>"Ecos da Praga" </h1>
      </div>
      <div className={style.containerImageBoard}>
        <div className={style.mapaContainer}>
          <img onClick={windowOpen1} className={`${style.imgFlow} ${window01 ? style.fadeInSide : ''} ${isToggled ? style.toggleActive : ''}`}  src={introImg01} alt="" />
          {window01 &&
            <div className={`${style.window01Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
              <p>
              " A cada outono, a vila de FrondeLume se transforma em um vibrante centro de celebração, onde moradores se reúnem na praça central para compartilhar suas fartas colheitas. A música e a dança ecoam, fortalecendo os laços familiares e mantendo viva a tradição da abundância. "
              </p>
            </div>
          }
          <img onClick={windowOpen2} className={`${style.imgFlow} ${window02 ? style.fadeInSide : ''} ${isToggled2 ? style.toggleActive2 : ''}`}  src={introImg02} alt="" />
          {window02 &&
            <div className={`${style.window01Container} ${window02 ? style.fadeIn : ''}`}>
              <p>
              " Diz os contos dos mais antigos que as frutas gigantes que nascem nas terras ao redor da vila, foi uma luz misteriosa que foi vista no céu, e onde essa luz tocou a terra, as primeiras dessas frutas extraordinárias cresceram, como um presente de uma força muito antiga e esquecida. "
              </p>
            </div>
          }
        </div>
        <button onClick={festaColheita} className={style.buttonChoiceA}>Continuar</button>
      </div>
      {openPopUp &&
          <div className={` ${style.planilhaPopUp} ${fadeIn ? style.fadeIn : style.fadeOut}`}>
            <PlanilhaComponent />
          </div>
      }
    </div>
  </>
  )
}

export default Comeco
