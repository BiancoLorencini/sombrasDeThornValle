import React , { useState, useEffect } from 'react'
import style from './festaColheita.module.css'
import { useNavigate } from 'react-router-dom'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import party01 from '../../assets/prologoImg/party01.png'
import Elowen from '../../assets/characters/Elowen.png'
import Helene from '../../assets/characters/Helene.png'
import Berethur from '../../assets/characters/Berethur.png'
import Faramond from '../../assets/characters/Faramond.png'
import Freya from '../../assets/characters/Freya.png'
import Halstein from '../../assets/characters/Halstein.png'
import Dorian from '../../assets/characters/Dorian.png'

const festaColheita = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [window01, setWindow01] = useState(false);
  const [window02, setWindow02] = useState(false);
  const [window03, setWindow03] = useState(false);
  const [window04, setWindow04] = useState(false);
  const [window05, setWindow05] = useState(false);
  const [window06, setWindow06] = useState(false);
  const [window07, setWindow07] = useState(false);
  const [window08, setWindow08] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);
  const [isToggled5, setIsToggled5] = useState(false);
  const [isToggled6, setIsToggled6] = useState(false);
  const [isToggled7, setIsToggled7] = useState(false);
  const [isToggled8, setIsToggled8] = useState(false);

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
    setFadeIn(!fadeIn);
  };

  const windowOpen1 = () => {
    setWindow01(!window01);
    setFadeOut(!fadeOut);
    setIsToggled(!isToggled);
    setWindow02(false);
    setIsToggled2(false);
    setIsToggled3(false);
  };

  const windowOpen2 = () => {
    setWindow02(!window02);
    setFadeOut(!fadeOut);
    setIsToggled2(!isToggled2);
    setIsToggled3(false);
    setWindow03(false);
  };

  const windowOpen3 = () => {
    setWindow03(!window03);
    setFadeOut(!fadeOut);
    setIsToggled3(!isToggled3);
    setIsToggled2(false);
    setWindow02(false);
  };

  return (
    <>
    <div className={style.containerText}>
      <TextBackground onClick={handlePopUp} >
      <p>V oce chega à clareira, onde aldeões já se reúnem ao redor de uma fogueira. Mesas de madeira, abarrotadas de pães quentes, queijos aromáticos, frutas frescas e carne assada, enchem o ar com aromas deliciosos. Faramond, o mais velho dos três irmãos músicos, dedilha seu alaúde com maestria, enquanto Helene encanta com sua flauta doce e Halstein, no tambor, mantém todos dançando. O som da música é alegre, e os pés dos presentes se movem quase involuntariamente, num ritmo contagiante.

      Entre os dançarinos, Elowen, com uma coroa de flores, se destaca. Seus movimentos são fluidos, quase sobrenaturais, e borboletas parecem segui-la enquanto ela sorri para todos ao redor. Sua irmã cega, Freya, permanece sentada, sorrindo serenamente enquanto sente a vibração da música no ar.

      Berentur, sempre animado, ergue sua caneca em um brinde animado: "À fartura e à amizade!". O pôr do sol tinge o céu de laranja, e as tochas ao redor da fogueira brilham, enquanto todos formam um grande círculo de dança ao som acelerado do alaúde de Faramond. É um momento de pura alegria, uma celebração que transcende as dificuldades dentro dos muros da cidade.</p>
      </TextBackground>
    </div>
    <div className={style.flagScrollTop}>
      <p>Prólogo</p>
      <h1>"<span>Ecos da Praga</span>" </h1>
    </div>
    <div className={style.containerImageBoard}>
      <div className={style.mapaContainer}>
        <img onClick={windowOpen1} className={`${style.imgFlow} ${window01 ? style.fadeInSide : ''} ${isToggled ? style.toggleActive : ''}`}  src={party01} alt="" />
        {window01 &&
          <div className={`${style.window01Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img onClick={windowOpen2} className={`${style.imgPersonagens} ${isToggled2 ? style.toggleActive2 : ''}`} src={Elowen} alt=""/>
            <img onClick={windowOpen3} className={`${style.imgPersonagens} ${isToggled3 ? style.toggleActive3 : ''}`} src={Freya} alt=""/>
            <img className={`${style.imgPersonagens} ${isToggled4 ? style.toggleActive2 : ''}`} src={Berethur} alt=""/>
            <img className={`${style.imgPersonagens} ${isToggled5 ? style.toggleActive2 : ''}`} src={Helene} alt=""/>
            <img className={`${style.imgPersonagens} ${isToggled6 ? style.toggleActive2 : ''}`} src={Faramond} alt=""/>
            <img className={`${style.imgPersonagens} ${isToggled7 ? style.toggleActive2 : ''}`} src={Halstein} alt=""/>
            <img className={`${style.imgPersonagens} ${isToggled8 ? style.toggleActive2 : ''}`} src={Dorian} alt=""/>
          </div>
        }
        {window02 &&
          <div className={`${style.window02Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Elowen} alt=""/>
            <h2>Elowen</h2>
            <p>A jovem de 22 anos, é uma mulher com beleza marcante, com longos cabelos negros, lisos como seda, que caem suavemente sobre seus ombros. Sua pele é clara e suave, com um brilho natural que reflete sua juventude e vitalidade. Seus olhos brilhantes, de um castanho profundo, transmitem uma mistura de doçura e mistério. </p>
          </div>
        }
        {window03 &&
          <div className={`${style.window03Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Freya} alt=""/>
            <h2>Freya</h2>
            <p>A irmã mais nova de Elowen, compartilha da mesma beleza cativante. Ela tem 18 anos, com cabelos longos e negros, semelhantes aos de Elowen, sempre de cabelos presos. Sua pele clara e suave contrasta com seus olhos de um cinza pálido, sem visão desde o nascimento, mas sempre irradiando serenidade.Freya está constantemente sorrindo e é conhecida por sua atenção calorosa a todos ao seu redor. Sua ligação especial com a natureza é evidente; ela parece entender profundamente o ambiente que não pode ver, como se sentisse a vida ao seu redor em uma forma mais pura. </p>
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
  </>
  )
}

export default festaColheita
