import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './prologo.module.css' 
import prologoAudio  from '../../assets/sound/chapter01.mp3'

const PrologoGame = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = 0.1;
      audioElement.play();
    }
  }, []);


  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setIsFading(true);
    }, 4000);

    const navigateTimeout = setTimeout(() => {
      navigate('/playerChoose'); 
    }, 6000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);
  
  return (
    <>
        <div className={`${isFading ? style.fadeOut : ''} ${style.prologoContainer}`}>
        <div className={style.capitulo}>
          <audio autoPlay ref={audioRef} src={prologoAudio}></audio>
          <h1 className={style.title}>
            Prólogo: <br />
            <span className={style.titleSpan}>"Ecos da Praga"</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default PrologoGame
