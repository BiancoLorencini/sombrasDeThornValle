import React , { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './mortePersonagem.module.css'
import mortePersonagem from '../../assets/fragmentImage/mortePersonagem.png'
import blood01 from '../../assets/fragmentImage/blood01.png'
import VideoButton from '../videoButton/VideoButton'
import deathAudio from '../../assets/sound/sfxHorrorPlayerDeath.mp3'
import deathHit from '../../assets/sound/swordHit.mp3'
const MortePersonagem = () => {
  const navigate = useNavigate()
  const [blood, setBlood] = useState(false)
  const [inicio, setInicio] = useState(false)

  useEffect(() => {
    const audioElement = new Audio(deathAudio);
    audioElement.play();
    audioElement.volume = 1.0
  }, [])


  useEffect(() => {
    setTimeout(() => {
      setBlood(true)
      const audioElement = new Audio(deathHit);
      audioElement.play();
      audioElement.volume = 1.0
      setTimeout(() => {
        setInicio(true)
      } , 2000)
    }, 3000)
  }, [])

  const handleButtonClick = () => {
    navigate('/')
  }

  return (
  <>
    <div className={style.mortePersonagemContainer}>
      {blood && 
      <div className={style.blood}>
        <img className={style.blood01} src={blood01} alt="" />
      </div>
      }
      <img className={style.mortePersonagem} src={mortePersonagem} alt="" />
      <h1>" Memento Mori "</h1>
    </div>
    {inicio && 
    <div className={style.reiniciar}>
      <VideoButton  onClick={handleButtonClick}  title="Tela de Inicio"/>
    </div>}
  </>
  )
}

export default MortePersonagem
