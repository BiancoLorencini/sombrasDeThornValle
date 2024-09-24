import React , {useState} from 'react'
import style from './diceStyle.module.css'
import lado01 from '../../assets/diceImg/dado01.png'
import lado02 from '../../assets/diceImg/dado02.png'
import lado03 from '../../assets/diceImg/dado03.png'
import lado04 from '../../assets/diceImg/dado04.png'
import lado05 from '../../assets/diceImg/dado05.png'
import lado06 from '../../assets/diceImg/dado06.png'

const DiceStyle = () => {
    const [isRolling, setIsRolling] = useState(false);

    const handleClick = () => {
        setIsRolling(true);
        setTimeout(() => setIsRolling(false), 2000); // Reseta após 2 segundos
    };


return (
    <div className={style.diceStyleContainer}>
        <div className={`${style.diceStyleCube} ${isRolling ? style.rolling : ''}`} onClick={handleClick} >
            <div className={style.s1}><img src={lado01} alt="lado de um dado com o número 1" /></div>
            <div className={style.s2}><img src={lado02} alt=" lado de um dado com o número 2 " /></div>
            <div className={style.s3}><img src={lado06} alt=" lado de um dado com o número 6 " /></div>
            <div className={style.s4}><img src={lado04} alt=" lado de um dado com o número 4 " /></div>
            <div className={style.s5}><img src={lado05} alt=" lado de um dado com o número 5 " /></div>
            <div className={style.s6}><img src={lado03} alt=" lado de um dado com o número 3 " /></div>
        </div>
    </div>
)
}

export default DiceStyle
