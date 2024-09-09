import React from 'react'
import style from './selecaoPersonagem.module.css'
import personagem01 from '../../assets/characters/Protagonista01.png'
import personagem02 from '../../assets/characters/Protagonista02.png'
const SelecaoPersonagem = () => {
  return (
    <div className={style.selecaoContainer}>
      <div className={style.containerInterno}>
          <div className={style.containerInternoPersonagem}>
            <img src={personagem01} alt="" />
            <div className={style.containerInternoPersonagemInfo} >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur voluptatem modi </p>
              <button  className={style.buttonSelection} >Escolher</button>
            </div>
          </div>
      </div>
      <div className={style.containerInterno}>
      <div className={style.containerInternoPersonagem}>
            <img src={personagem02} alt="" />
            <div className={style.containerInternoPersonagemInfo} >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consectetur voluptatem modi </p>
              <button className={style.buttonSelection}>Escolher</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SelecaoPersonagem
