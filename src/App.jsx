import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Info from './components/Info/Info'

function App() {
  

  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation/>

        <Info/>
      </div>
    </div>
  )
}

export default App
