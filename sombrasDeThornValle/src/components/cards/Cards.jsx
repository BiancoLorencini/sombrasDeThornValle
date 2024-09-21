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
import { db } from '../../config/firebaseConfig';
import { ref, get } from 'firebase/database';


const Cards = ({ itemNome }) => {
  const [equipamentos, setEquipamentos] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, 'equipamento/armas');
        const snapshot = await get(dbRef); 
        
        if (snapshot.exists()) {
          console.log('Equipamentos:', snapshot.val());
          console.log('Dados do Firebase:', snapshot.val());
          setEquipamentos(snapshot.val());
        } else {
          console.log('Nenhum dado disponível');
        }
      } catch (error) {
        console.error('Erro ao buscar equipamentos:', error);
      }
    };
  
    fetchData();
  }, [itemNome]);
  

  const getImagemItem = (item) => {
    switch (item) {
      case 'machado':
        return axe
      case 'arco':
        return bow
      case 'espadaDeDuasMaos':
        return greatSword
      case 'botaPesada':
        return heavyBoots
      case 'armaduraCouroPesada':
        return heavyLeatherArmor
      case 'elmoCouro':
        return helm
      case 'lanca':
        return lance
      case 'armaduraCouroLeve':
        return leatherArmor
      case 'espadaLonga':
        return longSword
      case 'maca':
        return mace
      case 'armaduraPlacas':
        return plateArmor
      case 'escudo':
        return shield
      case 'espadaCurta':
        return shortSword
      case 'botaCouro':
        return leatherBoots
      default:
        return null
    }
  }

  const filteredEquipamento = equipamentos
    ? Object.entries(equipamentos).filter(([key, value]) => key === itemNome)
    : [];

  return (
    <>
      {filteredEquipamento.length > 0 ? (
        filteredEquipamento.map(([key, item]) => (
          <div className={style.card} key={key}>
            <img src={getImagemItem(key)} alt={key} className={style.cards3D} />
            <div className={style.cardInfo}>
              <div className={style.cardTitle}>
                <p>{key}</p>
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
