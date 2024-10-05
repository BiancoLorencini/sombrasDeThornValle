import React, { useState, useEffect, useRef } from 'react';
import style from './textDefault.module.css';

const TextBackGroundComponent = ({ children, onClick, onClick2, onClick3, ...props }) => {
  const [displayedText, setDisplayedText] = useState(''); // Texto atualmente exibido
  const [typing, setTyping] = useState(true); // Estado para controlar se está digitando
  const textRef = useRef(null); // Referência para a caixa de texto
  const typingSpeed = 30; // Velocidade de digitação em milissegundos

  useEffect(() => {
    const fullText = typeof children === 'string' ? children : children.props.children;
    let index = 0;
    let intervalId = null;

    const startTyping = () => {
      intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
        if (index >= fullText.length) {
          clearInterval(intervalId);
          setTyping(false); // Indica que a digitação terminou
        }
      }, typingSpeed);
    };

    if (typing) {
      startTyping();
    }

    // Função para interromper a digitação e mostrar o texto completo
    const completeText = () => {
      clearInterval(intervalId);
      setDisplayedText(fullText);
      setTyping(false);
    };

    // Adiciona um event listener para cliques em qualquer lugar da página
    document.addEventListener('click', completeText);

    // Limpa o event listener e o intervalo ao desmontar o componente
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('click', completeText);
    };
  }, [children, typing, typingSpeed]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight; // Scrolla para o final do texto
    }
  }, [displayedText]);

  return (
    <div className={style.TextContainer}>
      <button type="button" className={style.planilhaButton} onClick={onClick}></button>
      <div ref={textRef} className={style.textBox}>
        <p>{displayedText}</p>
      </div>
    </div>
  );
};

export default TextBackGroundComponent;
