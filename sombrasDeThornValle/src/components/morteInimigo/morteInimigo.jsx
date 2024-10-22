import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './morteInimigo.module.css'
import vitoria from '../../assets/fragmentImage/vitoriaBanner.png'
import VideoButton from '../videoButton/VideoButton'
import TextBackGroundComponent from '../textBackground/TextBackGroundComponent'
import Cards from '../cards/Cards'

const MorteInimigo = () => {
  const navigate = useNavigate()
  const [descricao, setDescricao] = useState(false)


  const handleButtonClick = () => {
    navigate('/')
  }

  useEffect(() => {
    setTimeout(() => {
      setDescricao(true)
    }, 4000)
  }, [])



  return (
    <>
    
    <div className={style.morteInimigoContainer}>
      {descricao && 
      <TextBackGroundComponent onClick={handleButtonClick}>
        <p>
        O impacto é poderoso, e o último golpe da lança penetra profundamente na lateral do javali. O animal tropeça e cai, antes de cambalear por uma ultima vez derrotado.
        Com respiração pesada, você se aproxima de Freya ajudando-a se levantar e guiando-a de volta para a segurança dos braços de Elowen, que correm em sua direção com lágrimas de alívio em seus olhos. - "Você salvou a vida dela!", ela exclama, ainda tremendo de emoção.
        </p>  
      </TextBackGroundComponent>}
      <div className={style.morteInimigoBanner}>
        <img className={style.morteInimigoBanner} src={ vitoria } alt="banner de vitoria" />
        <VideoButton onClick={handleButtonClick} title="Continuar" />
      </div>
      {descricao && 
        <div className={style.morteInimigoDrop}>
        <h3>Voce encontrou:</h3>
        <Cards  itemNome="machado" />
      </div>
      }
    </div>
    </>
  )
}

export default MorteInimigo
