import React from 'react'
import style from './player.module.css'
import backgroundScroll from './backgroundScroll.jpg'

const player = () => {
  return (
    <div className={style.playerContainer}>
      <img src={backgroundScroll} alt="pergaminho envelhecido" />
    </div>
  )
}

export default player
