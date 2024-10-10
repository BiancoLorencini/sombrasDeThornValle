import React , { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './mortePersonagem.module.css'
import mortePersonagem from '../../assets/fragmentImage/mortePersonagem.png'
import blood01 from '../../assets/fragmentImage/blood01.png'
import VideoButton from '../videoButton/VideoButton'
const MortePersonagem = () => {
  const navigate = useNavigate()
  const [blood, setBlood] = useState(false)
  const [inicio, setInicio] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setBlood(true)
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
      {blood && <div className={style.blood}>
        <img src={blood01} alt="" />
      </div>}
      <img src={mortePersonagem} alt="" />
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
