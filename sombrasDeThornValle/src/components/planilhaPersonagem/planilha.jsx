import React from 'react'
import style from './planilha.module.css'
import backPack from '../../assets/characterSheet/backPack.png'
import bookOfAtributes from '../../assets/characterSheet/bookOfAtributes.png'
import cardEquip from '../../assets/characterSheet/cardEquip.png'
import fireMagic from '../../assets/characterSheet/fireMagic.png'
import flagScroll from '../../assets/characterSheet/flagScroll.png'
import healingPotion from '../../assets/characterSheet/healingPotion.png'
import iceMagic from '../../assets/characterSheet/iceMagic.png'
import leatherTag from '../../assets/characterSheet/leatherTag.png'
import lightiningMagic from '../../assets/characterSheet/lightningMagic.png'
import scrollDecoration from '../../assets/characterSheet/scrollDecoration.png'
const Planilha = () => {
  return (
    <div className={style.sheetMainContainer}>
      <div className={ style.sheet } >
        <div>
          <img className={style.book} src={bookOfAtributes} alt="livro de atributos" />
          <div className={style.sheetEnemies}>
            <div className={style.scrollFlag} ><h3>Inimigos</h3></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planilha
