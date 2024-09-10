import React, {useState} from 'react'
import style from './planilha.module.css'
import backPack from '../../assets/characterSheet/backPack.png'
import bookOfAtributes from '../../assets/characterSheet/bookOfAtributes.png'
import cardEquip from '../../assets/characterSheet/cardEquip.png'
import fireMagic from '../../assets/characterSheet/fireMagic.png'
import flagScroll from '../../assets/characterSheet/flagScroll.png'
import healingPotion from '../../assets/characterSheet/healingPotion.png'
import iceMagic from '../../assets/characterSheet/iceMagic.png'
import leatherTag from '../../assets/characterSheet/leatherTag.png'
import lightiningMagic from '../../assets/characterSheet/lightningMagic.png'
import scrollDecoration from '../../assets/characterSheet/scrollDecoration.png'
import character01 from '../../assets/characters/Protagonista01.png'
const Planilha = () => {
  const [isStyle, setIsStyle] = useState({});
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
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
    <div className={style.sheetMainContainer}>
      <div className={ style.sheet } >
        <div>
          <img className={style.book} src={bookOfAtributes} alt="livro de atributos" />
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
          </div>
          <div className={style.sheetBottom}>
            <div className={style.scrollDecor}>
              <img src={scrollDecoration} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planilha
