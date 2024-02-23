import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Info from './components/Info/Info.jsx'
import Plan from './components/Plan/Plan.jsx'
import Addons from './components/Addons/Addons.jsx'

function App() {
  

  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation/>

        {/* <Info/> */}
        {/* <Plan/> */}
        <Addons/>

      </div>
    </div>
  )
}

export default App
