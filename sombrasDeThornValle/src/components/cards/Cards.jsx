import React , {useState} from 'react'
import style from './cards.module.css'
import CardEquip from '../../assets/cards/equipCards.png'
import axe from '../../assets/cards/axe.png'
import bow from '../../assets/cards/bow.png'
import greatSword from '../../assets/cards/greatSword.png'
import healingPotion from '../../assets/cards/healingPotion.png'
import heavyBoots from '../../assets/cards/heavyBoots.png'
import heavyLeatherArmor from '../../assets/cards/heavyLeatherArmor.png'
import helm from '../../assets/cards/helm.png'
import lance from '../../assets/cards/lance.png'
import leatherArmor from '../../assets/cards/leatherArmor.png'
import longSword from '../../assets/cards/longSword.png'
import mace from '../../assets/cards/mace.png'
import plateArmor from '../../assets/cards/plateArmor.png'
import shield from '../../assets/cards/shield.png'
import shortSword from '../../assets/cards/shortSword.png'
import simpleGloves from '../../assets/cards/simpleGloves.png'


const Cards = () => {

  return (
    <>
      <div className={style.card}>
        <div className={style.cardInfo}><p>Axe</p><span className={style.cardIcon}></span><p>+1 hab <br /> Dmg: 1d6 </p></div>
      </div>
      
    </>
  )
}

export default Cards
