import React , { useState, useEffect } from 'react'
import style from './festaColheita.module.css'
import { useNavigate } from 'react-router-dom'
import TextBackground from '../../components/textBackground/TextBackGroundComponent.jsx'
import PlanilhaComponent from '../../components/planilhaCompInGame/planilhaComponent.jsx'
import BookLumen from '../../assets/fragmentImage/bookCoverFrondeLume.png'
import party01 from '../../assets/fragmentImage/FrondeLumeParty.png'
import Elowen from '../../assets/characters/Elowen.png'
import Helene from '../../assets/characters/Helene.png'
import Berethur from '../../assets/characters/Berethur.png'
import Faramond from '../../assets/characters/Faramond.png'
import Freya from '../../assets/characters/Freya.png'
import Halstein from '../../assets/characters/Halstein.png'
import Dorian from '../../assets/characters/Dorian.png'

const festaColheita = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [openBookFrondeLume,  setOpenBookFrondeLume] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [isToggled3, setIsToggled3] = useState(false);
  const [isToggled4, setIsToggled4] = useState(false);
  const [isToggled5, setIsToggled5] = useState(false);
  const [isToggled6, setIsToggled6] = useState(false);
  const [isToggled7, setIsToggled7] = useState(false);
  const [isToggled8, setIsToggled8] = useState(false);
  const [window01, setWindow01] = useState(false);
  const [elowen, setElowen] = useState(false);
  const [freya, setFreya] = useState(false);
  const [berethur, setBerethur] = useState(false);
  const [helene, setHelene] = useState(false);  
  const [faramond, setFaramond] = useState(false);
  const [halstein , setHalstein] = useState(false);
  const [dorian, setDorian] = useState(false);

  const handlePopUp = () => {
    setOpenPopUp(!openPopUp);
    setFadeIn(!fadeIn);
  };

  const windowOpen1 = () => {
    setWindow01(!window01);
    setFadeOut(!fadeOut);
    setIsToggled(!isToggled);
    setFreya(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setTimeout(() => {
      setOpenBookFrondeLume(!openBookFrondeLume);
    } , 200);
  };

  const bookFrondeLumeClose = () => {
    setWindow01(false)
    setOpenBookFrondeLume(false)
  };

  const windowOpen2 = () => {
    setElowen(!elowen);
    setFadeOut(!fadeOut);
    setIsToggled2(!isToggled2);
    setIsToggled3(false);
    setFreya(false);
    setIsToggled4(false);
    setIsToggled5(false);
    setIsToggled6(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setBerethur(false);
    setFaramond(false);
    setHalstein(false);
    setDorian(false);
    setHelene(false);

  };

  const windowOpen3 = () => {
    setFreya(!freya);
    setFadeOut(!fadeOut);
    setIsToggled3(!isToggled3);
    setIsToggled2(false);
    setElowen(false);
    setIsToggled4(false);
    setIsToggled5(false);
    setIsToggled6(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setBerethur(false);
    setFaramond(false);
    setHalstein(false);
    setDorian(false);
    setHelene(false);
  };

  const windowOpen4 = () => {
    setBerethur(!berethur);
    setFadeOut(!fadeOut);
    setIsToggled4(!isToggled4);
    setIsToggled5(false);
    setIsToggled6(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setFreya(false);
    setElowen(false);
    setFaramond(false);
    setHalstein(false);
    setDorian(false);
    setHelene(false);
  };

  const windowOpen5 = () => {
    setHelene(!helene);
    setFadeOut(!fadeOut);
    setIsToggled5(!isToggled5);
    setIsToggled4(false);
    setIsToggled6(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setFreya(false);
    setBerethur(false);
    setElowen(false);
    setFaramond(false);
    setHalstein(false);
    setDorian(false);
  };

  const windowOpen6 = () => {
    setFaramond(!faramond);
    setFadeOut(!fadeOut);
    setIsToggled6(!isToggled6);
    setIsToggled5(false);
    setIsToggled4(false);
    setIsToggled7(false);
    setIsToggled8(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setFreya(false);
    setBerethur(false);
    setHelene(false);
    setHalstein(false);
    setDorian(false);
  };

  const windowOpen7 = () => {
    setHalstein(!halstein);
    setFadeOut(!fadeOut);
    setIsToggled7(!isToggled7);
    setIsToggled6(false);
    setIsToggled5(false);
    setIsToggled4(false);
    setIsToggled8(false);    
    setIsToggled2(false);
    setIsToggled3(false);
    setFreya(false);
    setBerethur(false);
    setHelene(false);
    setFaramond(false);
    setDorian(false);
  };

  const windowOpen8 = () => {
    setDorian(!dorian);
    setFadeOut(!fadeOut);
    setIsToggled8(!isToggled8);
    setIsToggled7(false);
    setIsToggled6(false);
    setIsToggled5(false);
    setIsToggled4(false);
    setIsToggled2(false);
    setIsToggled3(false);
    setFreya(false);
    setBerethur(false);
    setHelene(false);
    setFaramond(false);
    setHalstein(false);
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
      <h1>"Ecos da Praga" </h1>
    </div>
    <div className={style.containerImageBoard}>
      <div className={style.mapaContainer}>
        <img onClick={windowOpen1} className={`${style.imgFlow} ${window01 ? style.fadeOut : ''} ${isToggled ? style.toggleActive : ''}`}  src={BookLumen} alt="" />
        {window01 &&
          <div className={`${style.window01Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img onClick={windowOpen2} className={`${style.imgPersonagens} ${isToggled2 ? style.toggleActive2 : ''}`} src={Elowen} alt=""/>
            <img onClick={windowOpen3} className={`${style.imgPersonagens} ${isToggled3 ? style.toggleActive3 : ''}`} src={Freya} alt=""/>
            <img onClick={windowOpen4} className={`${style.imgPersonagens} ${isToggled4 ? style.toggleActive4 : ''}`} src={Berethur} alt=""/>
            <img onClick={windowOpen5} className={`${style.imgPersonagens} ${isToggled5 ? style.toggleActive5 : ''}`} src={Helene} alt=""/>
            <img onClick={windowOpen6} className={`${style.imgPersonagens} ${isToggled6 ? style.toggleActive6 : ''}`} src={Faramond} alt=""/>
            <img onClick={windowOpen7} className={`${style.imgPersonagens} ${isToggled7 ? style.toggleActive7 : ''}`} src={Halstein} alt=""/>
            <img onClick={windowOpen8} className={`${style.imgPersonagens} ${isToggled8 ? style.toggleActive8 : ''}`} src={Dorian} alt=""/>
          </div>
        }
        {elowen &&
          <div className={`${style.window02Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Elowen} alt=""/>
            <h2>Elowen</h2>
            <p>Ela tem 22 anos e com seus cabelos negros como uma noite sem lua, desliza com graciosidade por onde passa. Seus fios lisos e longos caem sobre os ombros delicadamente, destacando sua pele clara e suave, quase como porcelana. Seus olhos, brilhantes e atentos, refletem uma intensidade que captura a atenção de todos à sua volta, transmitindo mistério e magnetismo. Sua beleza serena é irresistível, e há algo no seu sorriso discreto e no jeito como inclina a cabeça que cativa e atrai olhares, como se cada gesto fosse um convite velado. Com uma presença encantadora, Elowen parece carregar uma aura de sedução natural, exalando um charme hipnótico sem precisar dizer uma palavra. </p>
          </div>
        }
        {freya &&
          <div className={`${style.window03Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Freya} alt=""/>
            <h2>Freya</h2>
            <p>A irmã mais nova de Elowen, compartilha da mesma beleza cativante. Ela tem 18 anos, com cabelos longos e negros, semelhantes aos de Elowen, sempre de cabelos presos. Sua pele clara e suave contrasta com seus olhos de um cinza pálido, sem visão desde o nascimento, mas sempre irradiando serenidade.Freya está constantemente sorrindo e é conhecida por sua atenção calorosa a todos ao seu redor. Sua ligação especial com a natureza é evidente; ela parece entender profundamente o ambiente que não pode ver, como se sentisse a vida ao seu redor em uma forma mais pura. </p>
          </div>
        }
        {berethur &&
          <div className={`${style.window04Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Berethur} alt=""/>
            <h2>Berethur</h2>
            <p>Com 26 anos, ele é um homem robusto e de aparência média a alta, com cabelos curtos e castanhos, assim como os olhos. Sua inteligência não é seu ponto forte, mas sua lealdade e coragem são inigualáveis. Ele trabalha ao lado de seu avô no açougue dentro dos muros de ThornValle, e nunca perdeu uma Festa da Colheita. Sempre disposto a dar sua vida por uma amizade verdadeira, Berethur é conhecido por seus conselhos sinceros e sua disposição para ajudar, fazendo dele um companheiro confiável, mesmo nas situações mais difíceis.</p>
          </div>
        }
        {helene &&
          <div className={`${style.window05Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Helene} alt=""/>
            <h2>Helene</h2>
            <p>A mais velha dos três irmãos(27, 24 e 22), tem uma presença encantadora e intensa. Sua pele parda reluz sob a luz das tochas assim como seus cabelos cacheados, sempre soltos e esvoaçantes, enquadram um rosto delicado com olhos cor de mel profundo, que brilham com uma mistura de malícia e gentileza. Seus lábios carnudos curvam-se em sorrisos preguiçosos, mas quando ela toca seus instrumentos, especialmente a flauta, a preguiça desaparece, e a paixão aflora em cada nota.
            Helene tem um coração generoso e nunca hesita em ajudar aqueles que ama. Todos ao seu redor sabem de seu afeto por Berethur, o tímido e leal amigo.</p>
          </div>
        }
        {faramond &&
          <div className={`${style.window05Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Faramond} alt=""/>
            <h2>Faramond</h2>
            <p>Um músico talentoso e charmoso, com cabelos cacheados castanhos e olhos cor de mel, herdados de sua irmã Helene. Ele leva uma vida indulgente, focada na música, no prazer e na luxúria. Sempre à procura de conforto e diversão, é raro vê-lo em FrondeLume, exceto em grandes festividades. Quando não está tocando, Faramond reclama da falta de vinho e das companhias femininas, sendo mais conhecido por sua busca incessante por prazeres do que por seu comprometimento com a vida cotidiana.</p>
          </div>
        }
        {halstein &&
          <div className={`${style.window05Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Halstein} alt=""/>
            <h2>Halstein</h2>
            <p>O irmão mais novo de Helene e Faramond, é um jovem de 21 anos que vive dentro dos muros de ThornValle e, ao contrário dos seus irmãos, tem pouca afinidade com música. Embora saiba tocar o tambor e seja habilidoso em manter o ritmo das canções festivas, ele prefere evitar apresentações e não compartilha da paixão artística da família. Prático, observador e tem um espírito inquieto, o que o faz desgostar de FrondeLume, achando a vila simples e tediosa. Sua verdadeira paixão esta em explorar a cidade de ThornValle, onde é fascinado pelas estruturas, torres e a vida dentro dos muros.</p>
          </div>
        }
        {dorian &&
          <div className={`${style.window05Container} ${window01 ? style.fadeIn : style.fadeOut}`}>
            <img className={style.imgPersonagensIntern} src={Dorian} alt=""/>
            <h2>Dorian</h2>
            <p>Dorian é uma figura reclusa e enigmática, marcado pelo cheiro inconfundível de couro queimado, fruto de seu trabalho na forja da cidade. Apesar de estar entre seus amigos há seis meses, mantém uma postura distante e tímida, raramente se envolvendo nas interações sociais. Seu olhar atento e fixo revela uma fascinação por Freya, a quem observa discretamente, mas sem coragem de se aproximar. Ele prefere os cantos sombrios e é conhecido por sua pouca sociabilidade, carregando consigo um passado desconhecido que parece pesar sobre seu comportamento reservado e misterioso.</p>
          </div>
        }
        {openBookFrondeLume && 
          <div className={`${style.imgFlow2}`}>
            <img className={style.imgBookOpen} onClick={bookFrondeLumeClose} src={party01} alt="" />
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
