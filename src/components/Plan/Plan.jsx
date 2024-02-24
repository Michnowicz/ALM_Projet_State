import "./Plan.css"
import Data from "./Plan.json"

export default function Plan({display, hidden, plan, setPlan, price, setPrice}) {

    // change diplay on click to change component in app
    function handlePrevious() {
        display('info')
    }
    // change diplay on click to change component in app
    function handleNext() {
        display('addons')
    }

    //change useState of plan
    function handleSelection(e) {
        if (e.target.title != undefined && e.target.title != '') {
            setPlan(e.target.title)
        }
    }

    //change price
    function handleslide(e) {
        if (price === 'Monthly') {
            setPrice('Yearly')
        } else {
            setPrice('Monthly')
        }
    }
    
    return(
        <div className={hidden}>
            <div className="Title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing</p>
            </div>

            <div className="allPlan" onClick={handleSelection}>
                {
                    Data.map(
                        (d,i) =>
                        (
                            <div title={d.title} key={i} className="offer" id={plan === d.title ? 'chosen' : ''}>
                                <img title={d.title} src={d.src} alt="" />
                                <b title={d.title}>{d.title}</b>
                                {price === 'Monthly'
                                    ?
                                    <p title={d.title}>${d.monthlyPrice}/mo</p>
                                    :
                                    <p title={d.title}>${d.yearlyPrice}/yr</p>
                                } 
                            </div>
                        )
                    )
                }
            </div>
            
            <div className="toggleBtn" onClick={handleslide}>
                <p className={price === 'Monthly'?'select':'unselect'}>Monthly</p>
                <div id={price === 'Monthly'?'month':'year'} className="pillBtn">
                    <div className="pillInner"></div>
                </div>
                <p className={price === 'Yearly'?'select':'unselect'}>Yearly</p>
            </div>

        </div>
    )
}