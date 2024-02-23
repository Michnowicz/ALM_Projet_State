import "./Plan.css"
import Data from "./Plan.json"

export default function Plan() {
    
    return(
        <div className="Plan">
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
                <button className="BtnBack">Go Back</button>
                <button className="BtnNext">Next Step</button>
            </div>

        </div>
    )
}