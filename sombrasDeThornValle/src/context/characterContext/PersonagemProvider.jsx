import React, { createContext, useState, useContext } from 'react';

export const PersonagemContext = createContext();

export const PersonagemProvider = ({ children }) => {

  const [personagem, setPersonagem] = useState({
    nome: '',
    habilidade: 0,
    inteligencia: 0,
    constituicao: 0,
    sorte: 0,
    backpack: [],
    itensEquipados: [],
    magias: {
      gelo: false,
      raio: false,
      fogo: false,
    },
  });

  const adicionarItemNaMochila = (item) => {
    if (personagem.backpack.length < 4) {
      setPersonagem((prevState) => ({
        ...prevState,
        backpack: [...prevState.backpack, item],
      }));
    }
  };

  const equiparItem = (item) => {
    if (personagem.itensEquipados.length < 3) {
      setPersonagem((prevState) => ({
        ...prevState,
        itensEquipados: [...prevState.itensEquipados, item],
        // Alterar os atributos ao equipar o item
        habilidade: prevState.habilidade + item.bonusHab,
        constituicao: prevState.constituicao + item.bonusConstituicao,
        // Outros atributos...
      }));
    }
  };

  const desequiparItem = (item) => {
    setPersonagem((prevState) => ({
      ...prevState,
      itensEquipados: prevState.itensEquipados.filter(i => i.id !== item.id),
      habilidade: prevState.habilidade - item.bonusHab,
      constituicao: prevState.constituicao - item.bonusConstituicao,
      // Restaurar os atributos...
    }));
  };

  const atualizarAtributo = (atributo, valor) => {
    setPersonagem(prev => ({
      ...prev,
      atributos: {
        ...prev.atributos,
        [atributo]: valor
      }
    }));
  };

  return (
    <PersonagemContext.Provider value={{ personagem, adicionarItemNaMochila, equiparItem, desequiparItem , atualizarAtributo }}>
      {children}
    </PersonagemContext.Provider>
  );
};

export const useDado = () => useContext(DadoContext);