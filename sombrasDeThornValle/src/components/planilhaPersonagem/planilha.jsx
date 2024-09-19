import React, {useEffect, useState, useRef} from 'react'
import style from './planilha.module.css'
import backPack from '../../assets/characterSheet/backPack.png'
import fireMagic from '../../assets/characterSheet/fireMagic.png'
import iceMagic from '../../assets/characterSheet/iceMagic.png'
import lightiningMagic from '../../assets/characterSheet/lightningMagic.png'
import scrollDecoration from '../../assets/characterSheet/scrollDecoration.png'
import character01 from '../../assets/characters/Protagonista01.png'
import TutorialPopUp from '../../components/tutorialPopUp/popUp.jsx'
import musicBackground from '../../assets/music/Changes.mp3'
import { useDado } from '../../context/Dice/DiceContext.jsx'
import d6x1 from '../../assets/diceImg/d61.png'
import d6x2 from '../../assets/diceImg/d62.png'
import DiceStyle from '../diceStyle/DiceStyle.jsx'

import Cards from '../cards/Cards.jsx'

const Planilha = () => {
  const [isStyle, setIsStyle] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const musicRef = useRef();
  const [habilidade, setHabilidade] = useState(0);
  const [inteligencia, setInteligencia] = useState(0);
  const [constituicao, setConstituicao] = useState(0);
  const [sorte, setSorte] = useState(0);
  const {rollDice} = useDado();
  

  const [rollCount, setRollCount] = useState({
    habilidade: 0,
    inteligencia: 0,
    constituicao: 0,
    sorte: 0,
  });

  const handleRoll = (attribute) => {
    let result;
  
    if (attribute === 'habilidade' && rollCount.habilidade < 3) {
      result = rollDice(1, 6);
      setHabilidade(result);
      setRollCount(prev => ({ ...prev, habilidade: prev.habilidade + 1 }));
    } else if (attribute === 'inteligencia' && rollCount.inteligencia < 3) {
      result = rollDice(1, 6);
      setInteligencia(result);
      setRollCount(prev => ({ ...prev, inteligencia: prev.inteligencia + 1 }));
    } else if (attribute === 'constituicao' && rollCount.constituicao < 3) {
      const rolls = rollDice(2, 6); // Rola dois dados
      const total = Array.isArray(rolls) ? rolls.reduce((sum, r) => sum + r, 0) : rolls; // Soma os resultados
      setConstituicao(total);
      setRollCount(prev => ({ ...prev, constituicao: prev.constituicao + 1 }));
    } else if (attribute === 'sorte' && rollCount.sorte < 3) {
      result = rollDice(1, 6);
      setSorte(result);
      setRollCount(prev => ({ ...prev, sorte: prev.sorte + 1 }));
    }
  };


  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  useEffect(() => {
    const audioElement = musicRef.current;
    if (audioElement) {
      audioElement.loop = true;
      audioElement.play().catch(error => console.log('Playback error:', error));
    }
  }, []);

  const steps = [
    {
      message: 'Ao clicar na imagem do seu personagem, você pode ver a sua biografia resumida...',
      position: { top: '60px', left: '150px' }
    },
    {
      message: '...aqui estão seus atributos, HABILIDADE, INTELIGENCIA,     CONSTITUIÇÃO E SORTE...',
      position: { top: '10px', left: '600px' }
    },
    {
      message: '...aqui é a Habilidade: competências fisica em geral(combate, arremessar, escalar etc)...',
      position: { top: '20px', left: '330px' }
    },
    {
      message: '...aqui é a Inteligência: utilizado para a a mana máxima, e para um bom observador...',
      position: { top: '80px', left: '330px' }
    },
    {
      message: '...essa é a Constituição: utilizado para o HP (Hit Points/vida) total, e para resistencias em geral',
      position: { top: '80px', left: '330px' }
    },
    {
      message: '...e aqui é a Sorte: utilizado para fazer uma nova rolagem de dados, porém não se recupera(condição especial).',
      position: { top: '110px', left: '330px' }
    },
    {
      message: '...aqui ficam os itens que o personagem está equipando no momento...',
      position: { top: '250px', left: '120px' }
    },
    {
      message: '...os icones representam magias que o personagem possui (gelo, raio e fogo, e normalmente só podem ser usadas em combate).',
      position: { top: '405px', left: '330px' }
    },
    {
      message: '...quando entrar em combate, os inimigos aparecerão aqui na tela"Inimigos"...',
      position: { top: '350px', left: '850px' }
    },
    {
      message: '...e essa é a sua mochila de itens(com limite para somente 4 itens),clique na imagem para abrir.',
      position: { top: '100px', left: '850px' }
    },
    {
      message: 'Agora rolaremos os dados para definir seus atributos(maximo de 3 vezes para cada atributo, e ficando sempre com o ultimo resultado)...Boa Sorte!',
      position: { top: '20px', left: '250px' }
    },
    {
      message: '...e aqui encerramos o tutorial básico, tenha uma ótima aventura',
      position: { top: '400px', left: '950px' }
    }
  ];

  const handleClick = () => {
    setFlipped(!flipped);
    setFlipped2(false);
  };

  const handleClickBackPack = () => {
    setFlipped2(!flipped2);
    setFlipped(false);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 4;
    const rotateY = (centerX - x) / 4;

    setIsStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    });
};

const handleMouseLeave = () => {
  setIsStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease'
  });
};

  return (
    <div className={` ${style.sheetMainContainer} ${isFadingIn ? style.fadeIn : ''}`}	>
      <Cards />
      <div className={ style.sheet } >
        <div>
          <div className={style.book}>
            <div className={style.atributeSide}>
              <h3>Atributos</h3>
              <div className={style.info} >
                <label className={style.att}>HABILIDADE</label>
                <input className={style.attValor} type="text"  value={habilidade + 6} readOnly />
                <div className={style. buttonRollsHabilidade}>
                    <p>Habilidade</p>
                    <button 
                    onClick={() => handleRoll('habilidade')}
                    disabled={rollCount.habilidade >= 3}
                    >
                    <DiceStyle />
                    </button>
                </div>
              </div>
              <div className={style.info}>
                <label className={style.att}>INTELIGENCIA</label>
                <input className={style.attValor} type="text"  value={inteligencia + 6} readOnly />
                <div className={style. buttonRollsInteligencia}>
                    <p>Inteligencia</p>
                    <button 
                    onClick={() => handleRoll('inteligencia')}
                    disabled={rollCount.inteligencia >= 3}
                    >
                    <img className={style.d6} src={d6x1} alt="" />
                    </button>
                </div>
              </div>
              <div className={style.info}>
                <label className={style.att}>CONSTITUIÇÃO</label>
                <input className={style.attValor} type="text"  value={constituicao + 12} readOnly />
                <div className={style. buttonRollsConstituicao}>
                    <p>Constituição</p>
                    <button 
                    onClick={() => handleRoll('constituicao')}
                    disabled={rollCount.constituicao >= 3}
                    >
                    <img className={style.d6} src={d6x2} alt="" />
                    </button>
                </div>
              </div>
              <div className={style.info}>
              <label className={style.att}>SORTE</label>
                <input className={style.attValor} type="text"  value={sorte + 6} readOnly />
                <div className={style. buttonRollsSorte}>
                    <p>Sorte</p>
                    <button 
                    onClick={() => handleRoll('sorte')}
                    disabled={rollCount.sorte >= 3}
                    >
                    <img className={style.d6} src={d6x1} alt="" />
                    </button>
                </div>
              </div>
            </div>
            <div className={style.infoSide} >
              <div className={style.scrollFlag1}>
                <h3>Mochila</h3>
              </div>
              <div className={` ${style.backPack} ${flipped2 ? style.flipped : ''}`} onClick={handleClickBackPack}>
                  <img className={style.front} src={backPack} alt="mochila" />
                  <div className={style.backback}>
                    <div className={style.subBackPackContainer1} >
                      <div className={style.subBackPack} ></div>
                      <div className={style.subBackPack}></div>
                    </div>
                    <div className={style.subBackPackContainer2} >
                      <div className={style.subBackPack}></div>
                      <div className={style.subBackPack}></div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={style.sheetEnemies}>
            <div className={style.scrollFlag} ><h3>Inimigos</h3></div>
          </div>
        </div>
        <div className={style.leftSheet} >
          <div className={style.sheetHeader}>
            <div className={style.scrollFlagHeader}>
              <h2>Nome</h2>
            </div>
          </div>
          <div className={`${style.sheetCharacterImage} ${flipped ? style.flipped : ''}`} onClick={handleClick}>
            <img className={style.front} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={isStyle} src={character01} alt="" />
            <div className={style.back}>
              <p>...ele cresceu em uma aldeia simples, <br /> filho de um ex-soldado, que lutou em muitas guerras, e de uma camponesa cheia de vida e beleza. O pai lhe ensinou habilidades de combate e disciplina, enquanto a mãe lhe transmitiu o amor, o valor das pequenas coisas e a importância de cuidar dos outros. Ele foi moldado por esses ensinamentos, sempre com o desejo de explorar o mundo além dos limites de sua vila...</p>
            </div>
          </div>
          <div className={style.sheetMiddle}>
            <div className={style.cardEquip} ></div>
            <div className={style.cardEquip}></div>
            <div className={style.cardEquip}></div>
          </div>
          <div className={style.sheetMagic}>
            <button><img width={20} height={25} src={iceMagic} alt="" /></button>
            <button><img width={20} height={25} src={lightiningMagic} alt="" /></button>
            <button><img width={20} height={25} src={fireMagic} alt="" /></button>
            <div className={style.qtdMagic}>
            <p>x</p>
            <input type="text" value={Math.floor((inteligencia + 6) /2)} className={style.qtdMagicBackground}/>
            </div>
          </div>
          <div className={style.sheetBottom}>
            <div className={style.scrollDecor}>
              <img src={scrollDecoration} alt="decoração de pergaminho" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.sheetPopUp}>
      <TutorialPopUp  steps={steps} />
    </div>
    <audio 
        ref={musicRef}
        src={musicBackground} 
        preload="auto"
        autoPlay
        loop
        />
    </div>
  )
}

export default Planilha
