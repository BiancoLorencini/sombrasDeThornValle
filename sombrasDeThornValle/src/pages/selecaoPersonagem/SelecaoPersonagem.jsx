import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './selecaoPersonagem.module.css'
import personagem01 from '../../assets/characters/Protagonista01.png'
import personagem02 from '../../assets/characters/Protagonista02.png'
import VideoButton from '../../components/videoButton/VideoButton.jsx'

const SelecaoPersonagem = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setIsFading(true);
  }, []);

  const handleButtonClick = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      navigate('/planilha');
    } , 2000);
  };

  return (
    <div className={`${style.selecaoContainer} ${isFading ? style.fadeIn : ''} ${isFadingOut ? style.fadeOut : ''} `}>
      <div className={style.containerInterno}>
          <div className={style.containerInternoPersonagem}>
            <img src={personagem01} alt="" />
            <div className={style.containerInternoPersonagemInfo} >
              <p>" Ele aprendeu a caçar e sobreviver em condições extremas. <br /> Resiliente e determinado, ele mantém a calma mesmo diante das maiores adversidades." <br /> -Aldric PAI </p>
              <VideoButton onClick={handleButtonClick}  title="Escolher"/>
            </div>
          </div>
      </div>
      <div className={style.containerInterno}>
      <div className={style.containerInternoPersonagem}>
            <img src={personagem02} alt="" />
            <div className={style.containerInternoPersonagemInfo} >
              <p>"Amante da leitura e da natureza, ela encontra beleza e serenidade no que é simples. Sua sabedoria vai além dos livros, e sua conexão com o ambiente reflete em sua presença calma e graciosa" <br /> -Beatrix MÃE </p>
              <VideoButton onClick={handleButtonClick}  title="Escolher"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SelecaoPersonagem
