import React , {useState, useEffect} from 'react'
import axios from 'axios'
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
import leatherBoots from '../../assets/cards/leatherBoots.png'


const Cards = ({ itemNome }) => {
  const [equipamentos, setEquipamentos] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:3001/equipamento?_=${new Date().getTime()}`)
      .then(response => {
        console.log('Equipamentos:', response.data);
        setEquipamentos(response.data);
      })
      .catch(error => console.error('Erro ao buscar equipamentos:', error));
  }, [itemNome]);

  const getImagemItem = (item) => {
    switch (item) {
      case 'Machado':
        return axe
      case 'Arco':
        return bow
      case 'EspadaDeDuasMaos':
        return greatSword
      case 'healingPotion':
        return healingPotion
      case 'Bota Pesada':
        return heavyBoots
      case 'ArmaduraDeCouroPesada':
        return heavyLeatherArmor
      case 'ElmoDeCouro':
        return helm
      case 'Lanca':
        return lance
      case 'ArmaduraDeCouro':
        return leatherArmor
      case 'EspadaLonga':
        return longSword
      case 'Maca':
        return mace
      case 'ArmaduraDePlacas':
        return plateArmor
      case 'Escudo':
        return shield
      case 'EspadaCurta':
        return shortSword
      case 'simpleGloves':
        return simpleGloves
      case 'BotaDeCouro':
        return leatherBoots
      default:
        return null
    }
  }

  const filteredEquipamento = equipamentos.length > 0 ? 
  equipamentos.filter(equipamento => equipamento.nome === itemNome) : [];

  return (
    <>
      {filteredEquipamento.length > 0 ? (
        filteredEquipamento.map(item => (
          <div className={style.card} key={item.id + itemNome}>
            <img src={getImagemItem(item.nome)} alt={item.nome} className={style.cards3D} />
            <div className={style.cardInfo}>
              <div className={style.cardTitle}>
                <p>{item.nome}</p>
              </div>
              <div className={style.cardText}>
                <p>+{item.bonusHab} hab <br /> Dano: {item.dano}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Item não encontrado</p>
      )}
    </>
  );
};

export default Cards;
