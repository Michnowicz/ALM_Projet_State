import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/navigation/Navigation'
import Info from './components/Info/Info.jsx'
import Plan from './components/Plan/Plan.jsx'
import Addons from './components/Addons/Addons.jsx'
import Summary from './components/Summary/Summary.jsx'
import Confirm from './components/Confirm/Confirm.jsx'




function App() {

  let [display, setDisplay] = useState('info')
  let [plan, setPlan] = useState('')
  let [price, setPrice] = useState('Monthly')
  let [addonsChoosed, setAddonsChoosed] = useState([false, false, false])
  let [total, setTotal] = useState(0)
  

  //variables used to change the display of topDiv
  let [tag, setTag] = useState(['info', 'plan', 'addons', 'summary', 'confirm'])
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
    if (count < (tag.length-2)) {
      setCount(count + 1)
    } else if (count < (tag.length-1) && total > 0 && plan != '') {
      setCount(count + 1)
    }
  }


  return (
    <div className='App'>
      <div className='mainContainer'>
        <Navigation count={count}/>

        <div className={display != 'confirm' ? 'rightDiv' : 'hidden'}>
          <div className='topDiv'>
            <Info hidden={display != 'info' ? 'hidden': 'Info'}/>
            <Plan price={price} setPrice={setPrice} plan={plan} setPlan={setPlan} hidden={display != 'plan' ? 'hidden': 'Info'}/>
            <Addons hidden={display != 'addons' ? 'hidden': 'Info'} price={price} addonsChoosed={addonsChoosed} setAddonsChoosed={setAddonsChoosed} />
            <Summary total={total} setTotal={setTotal} setCount={setCount} setDisplay={setDisplay} display={display} price={price} plan={plan} addonsChoosed={addonsChoosed} hidden={display != 'summary' ? 'hidden': 'Info'}/>
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

        <Confirm display={display}/>

      </div>
      

    </div>
  )
}

export default App
