import React, { useRef, useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import OpeningVideo from '../assets/introVideo/freyaIntro.mp4'
import SecondOpeningVideo from '../assets/introVideo/smokeIntro.mp4'
import buttomVideo from '../assets/introVideo/buttom.mp4'
import style from './App.module.css'
import OpeningAudio from '../assets/music/introFreyaSound.mp3'
import OpeningInfo02  from '../assets/paperIntro.jpg'
import VideoButton from '../components/videoButton/VideoButton';


const LoginScreen = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(2);
  const [isFading, setIsFading] = useState(false);
  const [isFading2, setIsFading2] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef(null);
  
  const HadleStartGame = () => {
    setIsFading2(true);
    setTimeout(() => {
      navigate('/prologo');
    }, 2000);
  };

  const handleVideoEnd = () => {
      setIsFading(true);
  };

  const handleStartGameWhitOutAudio = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
    }
    setShowIntro(false);
    setAudioStarted(false);
  };


  const startAudio = () => {
    const audioElement = audioRef.current;
    setShowIntro(false);
    setAudioStarted(true);
    if (audioElement) {
      audioElement.
      audioElement.loop = true;
      audioElement.play().catch(error => console.log('Playback error:', error));
      setAudioStarted(true);
    }
  };

  useEffect(() => {
    if (isFading) {
      const videoElement = currentVideo === 1 ? videoRef1.current : videoRef2.current;
      setTimeout(() => {
        setCurrentVideo((prevVideo) => (prevVideo === 1 ? 2 : 1));
        videoElement.currentTime = 0;
        videoElement.play();
        setIsFading(false);
      }, 800); 
    }
  }, [isFading, currentVideo]);

  useEffect(() => {
    const videoElement = currentVideo === 1 ? videoRef1.current : videoRef2.current;
    videoElement.currentTime = 0;
    videoElement.play();
  }, [currentVideo]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.loop = true;
      audioElement.play().catch(error => console.log('Playback error:', error));
    }
  }, []);


  return (
    <>
      {showIntro && (
      <div className={style.introScreen}>
        <div className={style.introtextBox} >
          <img src={OpeningInfo02} alt='Pergaminho' className={style.pergaminhoImage} />
          <p className={style.introText}>Como Jogar <span className={style.titleOpening}>"Sombras de ThornValle"</span> <br /> <br />
            Bem-vindo a "Sombras de ThornValle"! Este é um jogo de aventura interativo, onde suas escolhas moldam a história. <br /> 
            Siga estas orientações para começar:
            <ul className={style.orientacoes}>
              <li>
                Escolha seu Caminho: Em cada etapa da jornada, você será apresentado a opções. Decida com sabedoria qual caminho seguir
              </li>
              <li>
                Leia as Descrições: Preste atenção aos detalhes e descrições fornecidas para entender melhor o que está acontecendo e tomar decisões informadas.</li>
              <li>
                Enfrente Desafios: Prepare-se para enfrentar desafios e tomar decisões que afetarão o desfecho da sua aventura.
              </li>
            </ul>
            Para uma Experiência Completa
            Recomendamos usar áudio para uma imersão total na atmosfera do jogo. A música e os efeitos sonoros são projetados para enriquecer sua jornada e tornar a experiência mais envolvente. <br/> 
            <span className={style.divirtase}>Divirta-se e boa sorte!</span>
            </p>
              <div className={style.buttonContainer}>
                <div className={style.buttonContainerintern} >
                  <VideoButton onClick={startAudio} title='Som'/>
                </div>
                <div className={style.buttonContainerintern}>
                  <VideoButton onClick={handleStartGameWhitOutAudio} title='Sem Som'/>
                </div>
              </div>
        </div>
      </div>
    )}
      <div className={`${style.mainContainer} ${showIntro ? style.hidden : ''} ${isFading2 ? style.fadeOut : ''} `}>
        <h1 className={style.title}>Sombras de ThornValle</h1>
        <div className={style.buttonContainerPlay}>
          <VideoButton onClick={HadleStartGame} title='Jogar'/>
        </div>
        <video 
          ref={videoRef1}
          className={`${style.backgroundVideo} ${currentVideo === 2 ? (isFading ? style.fadeOut : style.fadeIn) : style.hidden}`}
          autoPlay
          loop={false} 
          muted
          onEnded={handleVideoEnd}>
          <source src={OpeningVideo} type="video/mp4" />
        </video>
        <video
          ref={videoRef2}
          className={`${style.backgroundVideo} ${currentVideo === 1 ? (isFading ? style.fadeOut : style.fadeIn) : style.hidden}`}
          autoPlay
          loop={false} 
          muted
          onEnded={handleVideoEnd}
        >
          <source src={SecondOpeningVideo} type="video/mp4" />
        </video>
        {audioStarted &&
          <audio 
            ref={audioRef}
            src={OpeningAudio} 
            preload="auto"
            autoPlay
            loop
            />
          }
      </div>
    </>
  )
}

export default LoginScreen
