import React from 'react'
import style from './comeco.module.css'
import Cards from '../../components/cards/Cards.jsx' 

const comeco = () => {
  return (
    <div className={style.comecoContainer}>
      <Cards itemNome="espadaLonga" />
    </div>
  )
}

export default comeco
