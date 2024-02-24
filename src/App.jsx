import { useEffect, useState } from 'react'
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
  

  let [tag, setTag] = useState(['info', 'plan', 'addons', 'summary'])
  let [count, setCount] = useState(0)

  useEffect(()=>{
    setDisplay(tag[count])
  },[count])

  // change diplay on click to change component in app
  function handlePrevious() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  // change diplay on click to change component in app
  function handleNext() {
    if (count < (tag.length-1)) {
      setCount(count + 1)
    }
  }


  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation/>

        <div className='rightDiv'>
          <div className='topDiv'>
            <Info setDisplay={setDisplay} hidden={display != 'info' ? 'hidden': 'Info'}/>
            <Plan price={price} setPrice={setPrice} plan={plan} setPlan={setPlan} display={setDisplay} hidden={display != 'plan' ? 'hidden': 'Info'}/>
            <Addons display={setDisplay} hidden={display != 'addons' ? 'hidden': 'Info'}/>
            <Summary display={setDisplay} hidden={display != 'summary' ? 'hidden': 'Info'}/>
          </div>
          
          <div className="switchStep">

            <div className='switchLeft'>
              <button className={display === 'info' ? 'hidden' : "BtnBack"} onClick={handlePrevious}>
                Go Back
              </button>
            </div>

            <div className='switchRight'>
              <button className="BtnNext" onClick={handleNext}>
                {display === 'summary' ? 'Confirm' : 'Next Step'}
              </button>
            </div>
            
          </div>
          
        </div>
        

      </div>
    </div>
  )
}

export default App
