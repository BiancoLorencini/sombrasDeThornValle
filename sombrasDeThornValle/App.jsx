import React from "react"
import AppRouter from './src/routes/AppRouter.jsx'
import { DadoProvider } from './src/context/Dice/DiceContext.jsx'

function App() {

  return (
    <DadoProvider>
      <AppRouter /> 
    </DadoProvider>
  )
}

export default App
