import React from 'react'
import { useState, useEffect } from 'react'
import style from './prologo.module.css' 
import { useNavigate } from 'react-router-dom';


const PrologoGame = () => {

  const [showPrologo, setShowPrologo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShowPrologo(false);
      navigate('/playerChoose'); 
    }, 3000);
  }, [navigate]);


  return (
    <>
        <div className={` ${showPrologo ? '' : style.fadeOut} ${style.prologoContainer}`}>
        <div className={style.capitulo}>
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
