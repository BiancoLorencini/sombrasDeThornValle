import React, { useState, useEffect, useRef } from 'react';
import style from './textDefault.module.css';

const TextBackGroundComponent = ({ children, onClick, onClick2, onClick3, ...props }) => {
  const [displayedText, setDisplayedText] = useState(''); 
  const [showFullText, setShowFullText] = useState(false); 
  const textRef = useRef(null);
  const typingSpeed = 10; 
  const fullText = typeof children === 'string' ? children : children.props.children;

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (!showFullText) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
        if (index >= fullText.length) {
          clearInterval(intervalId);
        }
      } else {
        setDisplayedText(fullText); 
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); 
  }, [children, typingSpeed, showFullText, fullText]); 

  useEffect(() => {
    if (textRef.current) {
      textRef.current.scrollTop = textRef.current.scrollHeight;
    }
  }, [displayedText]);

  const handleClick = () => {
    setShowFullText(true); 
  };

  return (
    <div className={style.TextContainer} onClick={handleClick}>
      <button type="button" className={style.planilhaButton} onClick={onClick}></button>
      
      <div ref={textRef} className={style.textBox} onClick={handleClick}>
        <p>{displayedText}</p> 
      </div>
    </div>
  );
};

export default TextBackGroundComponent;