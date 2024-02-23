import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Info from './components/Info/Info'
import Plan from './components/Plan/Plan'

function App() {
  

  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation/>

        {/* <Info/> */}
        <Plan/>

      </div>
    </div>
  )
}

export default App
