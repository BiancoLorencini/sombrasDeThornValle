import React , { useRef } from 'react'
import style from './videoButton.module.css'
import videoB from '../../assets/introVideo/buttom.mp4'
import audioClik from '../../assets/sound/clikButton.mp3'


const VideoButton = ( {onClick, title, ...props} ) => {
  const audioRef = useRef(new Audio(audioClik));
  const videoRef = useRef(null);

  const playButtonSound = () => {
    const sound = audioRef.current;
    sound.volume = 0.1;
    sound.play();
  };

  const handleClick = () => {
    playButtonSound();
    if (onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  
  return (
    <>
      <button 
        onClick={handleClick} 
        className={style.buttonInfo}
        {...props}
        >
        <p>{title}</p>
        <video
          className={style.VideoButton}
          ref={videoRef}
          src={videoB}
          loop
          muted
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          />
      </button>
    </>
  )
}

export default VideoButton
