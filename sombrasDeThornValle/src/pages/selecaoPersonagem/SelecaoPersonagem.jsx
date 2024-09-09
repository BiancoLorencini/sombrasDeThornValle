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
              <p>" Ele aprendeu a caçar e sobreviver em condições extremas. <br /> Resiliente e determinado, ele mantém a calma mesmo diante das maiores adversidades." <br /> -Aldric</p>
              <button  className={style.buttonSelection} >Escolher</button>
            </div>
          </div>
      </div>
      <div className={style.containerInterno}>
      <div className={style.containerInternoPersonagem}>
            <img src={personagem02} alt="" />
            <div className={style.containerInternoPersonagemInfo} >
              <p>"Amante da leitura e da natureza, ela encontra beleza e serenidade no que é simples. Sua sabedoria vai além dos livros, e sua conexão com o ambiente reflete em sua presença calma e graciosa" </p>
              <button className={style.buttonSelection}>Escolher</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SelecaoPersonagem
