import React , { useContext, useState, useEffect, useRef } from 'react'
import style from './planilhaComponent.module.css'
import { PersonagemContext } from '../../context/characterContext/PersonagemProvider.jsx'
import character01 from '../../assets/characters/protagonistaHomem.png'
import scrollDecoration from '../../assets/characterSheet/scrollDecoration.png'
import lightningMagic from '../../assets/characterSheet/lightningMagic.png'
import backPack from '../../assets/characterSheet/backPack.png'
import fireMagic from '../../assets/characterSheet/fireMagic.png'
import iceMagic from '../../assets/characterSheet/iceMagic.png'



const PlanilhaComponent = () => {
  const { personagem } = useContext(PersonagemContext);
  const [isStyle, setIsStyle] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);

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

useEffect(() => {
  setIsFadingIn(true);
}, []);

  return (
    <div className={` ${style.sheetMainContainer} ${isFadingIn ? style.fadeIn : ''}`}	>
      <div className={ style.sheet } >
        <div>
          <div className={style.book}>
            <div className={style.atributeSide}>
              <h3>Atributos</h3>
              <div className={style.info}>
                  <label className={style.att}>HABILIDADE</label>
                  <input className={style.attValor} type="text"  value={personagem.atributo.habilidade} />
              </div>
              <div className={style.info}>
                <label className={style.att}>INTELIGENCIA</label>
                <input className={style.attValor} type="text"  value={personagem.atributo.inteligencia} readOnly />
              </div>
              <div className={style.info}>
                <label className={style.att}>CONSTITUIÇÃO</label>
                <input className={style.attValor} type="text"  value={personagem.atributo.constituicao}  readOnly />
              </div>
              <div className={style.info}>
              <label className={style.att}>SORTE</label>
                <input className={style.attValor} type="text"  value={personagem.atributo.sorte} />
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
            <div className={style.infoLeft}>
              <div className={style.scrollFlag} ><h3>Dano Total</h3></div>
              <div className={style.danoTotalContainer}>
                <div className={style.somaDano}>
                  <label>base</label>
                  <span className={style.danoTotalDivider}></span>
                  <p>{personagem.atributo.dano}</p>
                </div>
                <p>+</p>
                <div className={style.somaDano}>
                  <label>equip</label>
                  <span className={style.danoTotalDivider}></span>
                  <p>{personagem.atributo.dano}</p>
                </div>
                <p>=</p>
                <div className={style.somaDano}>
                  <label>total</label>
                  <span className={style.danoTotalDivider}></span>
                  <p>{personagem.atributo.dano}</p>
                </div>
              </div>
            </div>
            <span className={style.divider}></span>
            <div className={style.infoRight}>
              <div className={style.scrollFlag} ><h3>Resistência</h3></div>
              <p>Resistencia Personagem</p>
            </div>
          </div>
        </div>
        <div className={style.leftSheet} >
          <div className={style.sheetHeader}>
            <div className={style.scrollFlagHeader}>
              <h2>{personagem.nome}</h2>
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
            <button><img width={20} height={25} src={iceMagic}  alt="" /></button>
            <button><img width={20} height={25} src={lightningMagic}  alt="" /></button>
            <button><img width={20} height={25} src={fireMagic} alt="" /></button>
            <div className={style.qtdMagic}>
            <p>x</p>
            <input type="text" value={personagem.atributo.qtdMagia} className={style.qtdMagicBackground}/>
            </div>
          </div>
          <div className={style.sheetBottom}>
            <div className={style.scrollDecor}>
              <img src={scrollDecoration} alt="decoração de pergaminho" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanilhaComponent
