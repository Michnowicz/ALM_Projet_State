import "./Plan.css"
import Data from "./Plan.json"

export default function Plan({display, hidden}) {


    // change diplay on click to change component in app
    function handlePrevious() {
        display('info')
    }
    // change diplay on click to change component in app
    function handleNext() {
        display('addons')
    }
    
    return(
        <div className={hidden}>
            <div className="Title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>

            <div className="allPlan">
                {
                    Data.map(
                        (d,i) =>
                        (
                            <div key={i} className="offer">
                                <img src={d.src} alt="" />
                                <b>{d.title}</b>
                                <p>${d.monthlyPrice}/mo</p>
                            </div>
                        )
                    )
                }
            </div>
            
            <div className="toggleBtn">
                <p>Monthly</p>
                <div className="pillBtn"><div className="pillInner"></div></div>
                <p>Yearly</p>
            </div>

            <div className="switchStep">
                <button className="BtnBack" onClick={handlePrevious}>Go Back</button>
                <button className="BtnNext" onClick={handleNext}>Next Step</button>
            </div>

        </div>
    )
}