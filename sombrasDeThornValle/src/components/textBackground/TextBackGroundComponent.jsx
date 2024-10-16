import React, { useState, useEffect, useRef } from 'react';
import style from './textDefault.module.css';

const TextBackGroundComponent = ({ children, onClick, onClick2, onClick3, ...props }) => {
  const [displayedText, setDisplayedText] = useState(''); 
  const [typing, setTyping] = useState(true);
  const textRef = useRef(null); 
  const typingSpeed = 30;

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
          setTyping(false); 
        }
      }, typingSpeed);
    };

    if (typing) {
      startTyping();
    }

    const completeText = () => {
      clearInterval(intervalId);
      setDisplayedText(fullText);
      setTyping(false);
    };

    document.addEventListener('click', completeText);


    return () => {
      clearInterval(intervalId);
      document.removeEventListener('click', completeText);
    };
  }, [children, typing, typingSpeed]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight; 
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
