import React, { useState, useEffect } from 'react'
import style from './actionTimeBar.module.css'
import backBar from '../../assets/fragmentImage/atb04.png'

const ActionTimeBar = ({habilidade, onActionAvailable, reset}) => {
  const [progress, setProgress] = useState(0);
  const [actionAvailable, setActionAvailable] = useState(false);
  const progressRate = 1000 / habilidade;


  const getBarColor = () => {
    if (progress <= 25) {
      return '#aa0505'; 
    } else if (progress <= 50) {
      return '#F6511D'; 
    } else if (progress <= 75) {
      return '#f0be1d'; 
    } else {
      return '#345511';
    }
  };

  useEffect(() => {
    let interval = null;

    if (progress < 100 && !actionAvailable) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, progressRate);
    } else if (progress === 100) {
      setActionAvailable(true);
    }

    return () => clearInterval(interval);
  }, [progress, actionAvailable, progressRate]);


  useEffect(() => {
    if (progress === 100) {
      setActionAvailable(true);
      onActionAvailable(true); // Informa ao componente externo que a ação está disponível
    } else {
      setActionAvailable(false);
    }
  }, [progress, onActionAvailable]);

  useEffect(() => {
    if (reset) {
      setProgress(0); // Reinicia o progresso
      setActionAvailable(false); // Desabilita a ação disponível
    }
  }, [reset]);

  return (
    <>
      <p className={`${style.atbTitle} ${progress === 100 ? style.atbFull : ''}`}>Action Time Bar</p>
      <div className={ style.atbBarContainer }>
            <div
              className={`${style.atbBar} ${progress === 100 ? style.atbFullGlow : ''}`}
              style={{ width: `${progress}%` , backgroundColor: getBarColor()}} // O progresso é mostrado aqui
            >
            <img className={ style.backBar } src={backBar} alt="" />
            </div>
      </div>
    </>
  )
}

export default ActionTimeBar
