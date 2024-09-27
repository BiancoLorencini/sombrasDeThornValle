import React from 'react'
import style from './comeco.module.css'
import Cards from '../../components/cards/Cards.jsx' 
import PlanilhaContexto from '../../components/planilhaCompInGame/planilhaComponent.jsx'
const comeco = () => {
  return (
    <div className={style.comecoContainer}>
      <Cards itemNome="espadaCurta" />
    </div>
  )
}

export default comeco
