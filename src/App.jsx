import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Info from './components/Info/Info.jsx'
import Plan from './components/Plan/Plan.jsx'
import Addons from './components/Addons/Addons.jsx'
import Summary from './components/Summary/Summary.jsx'

function App() {

  let [display, setDisplay] = useState('info')
  let [plan, setPlan] = useState('')
  let [price, setPrice] = useState('Monthly')
  

  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation/>

        <Info setDisplay={setDisplay} hidden={display != 'info' ? 'hidden': 'Info'}/>
        <Plan price={price} setPrice={setPrice} plan={plan} setPlan={setPlan} display={setDisplay} hidden={display != 'plan' ? 'hidden': 'Info'}/>
        <Addons display={setDisplay} hidden={display != 'addons' ? 'hidden': 'Info'}/>
        <Summary display={setDisplay} hidden={display != 'summary' ? 'hidden': 'Info'}/>

      </div>
    </div>
  )
}

export default App
