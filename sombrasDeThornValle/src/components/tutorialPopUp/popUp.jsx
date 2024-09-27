import React, { useState, useEffect, useRef } from 'react';
import style from './popUp.module.css';

const TutorialPopUp = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { message, position } = steps[currentStep];

  return (
    <div
      className={style.tutorialPopUp}
      style={{ top: position.top, left: position.left }}
    >
      <p>{message}</p>
      {currentStep < steps.length - 1 ? (
        <div className={style.popUpButtons}>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
        </div>
      ) : (
        <div className={style.popUpButtons}>
        </div>
      )}
    </div>
  );
};

export default TutorialPopUp;
