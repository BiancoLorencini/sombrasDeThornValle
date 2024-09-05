import OpeningVideo from './src/assets/introVideo/freyaIntro.mp4'
import buttomVideo from './src/assets/introVideo/buttom.mp4'
import style from './App.module.css'


function App() {


  return (
    <>
      <div className={style.mainContainer}>
        <h1 className={style.title}>Sombras de ThornValle</h1>
        <button className={style.buttonIntro}> <p className={style.buttomText}>Jogar</p> <video className={style.buttomVideo} autoPlay loop muted  src={buttomVideo}></video></button>
        <video autoPlay loop muted>
          <source src={OpeningVideo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default App
