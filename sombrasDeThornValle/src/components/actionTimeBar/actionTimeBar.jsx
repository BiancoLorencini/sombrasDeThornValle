import React, { useState, useEffect } from 'react'
import style from './actionTimeBar.module.css'

const ActionTimeBar = ({habilidade, onActionAvailable, reset}) => {
  const [progress, setProgress] = useState(0);
  const [actionAvailable, setActionAvailable] = useState(false);
  const progressRate = 1500 / habilidade;
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
      console.log('Ação disponível!');
      setProgress(100);
    }
  }, [progress]);

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
    <div className={ style.atbBarContainer }>
      <div
        className={ style.atbBar }
        style={{ width: `${progress}%` }} // O progresso é mostrado aqui
      />
    </div>
  )
}

export default ActionTimeBar
