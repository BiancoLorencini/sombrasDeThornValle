import OpeningVideo from './src/assets/introVideo/aberturaRastro.mp4'
import style from './App.module.css'


function App() {


  return (
    <>
      <div className={style.mainContainer}>
        <h1 className={style.title}>Sombras de ThornValle</h1>
        <video autoPlay loop muted>
          <source src={OpeningVideo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default App
