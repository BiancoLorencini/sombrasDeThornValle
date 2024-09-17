import React from 'react'
import style from './diceStyle.module.css'


const DiceStyle = () => {
return (
    <div className={style.diceStyleContainer}>
        <div className={style.diceStyleCube} >
            <div className={style.s1}>1</div>
            <div className={style.s2}>2</div>
            <div className={style.s3}>3</div>
            <div className={style.s4}>4</div>
            <div className={style.s5}>5</div>
            <div className={style.s6}>6</div>
        </div>
    </div>
)
}

export default DiceStyle
