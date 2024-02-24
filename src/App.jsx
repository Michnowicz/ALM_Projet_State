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
  let [addonsChoosed, setAddonsChoosed] = useState([false, false, false])
  

  //variables used to change the display of topDiv
  let [tag, setTag] = useState(['info', 'plan', 'addons', 'summary'])
  let [count, setCount] = useState(0)
  //change the display of topDiv
  useEffect(()=>{
    setDisplay(tag[count])
  },[count])
  // change count on click used to change display
  function handlePrevious() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  // change count on click used to change display
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
            <Info hidden={display != 'info' ? 'hidden': 'Info'}/>
            <Plan price={price} setPrice={setPrice} plan={plan} setPlan={setPlan} hidden={display != 'plan' ? 'hidden': 'Info'}/>
            <Addons hidden={display != 'addons' ? 'hidden': 'Info'} price={price} addonsChoosed={addonsChoosed} setAddonsChoosed={setAddonsChoosed} />
            <Summary hidden={display != 'summary' ? 'hidden': 'Info'}/>
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

      <div className='test'>
        {addonsChoosed}
      </div>
    </div>
  )
}

export default App
