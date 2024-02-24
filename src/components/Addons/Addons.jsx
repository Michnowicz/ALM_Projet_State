import "./Addons.css"
import Data from "./Addons.json"



export default function Addons({display, hidden}) {


    // change diplay on click to change component in app
    function handlePrevious() {
        display('plan')
    }
    // change diplay on click to change component in app
    function handleNext() {
        display('summary')
    }
    

    return(
        <div className={hidden}>

            <div className="Title">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="offers">
            {
                Data.map(
                    (d,i) => 
                    (

                            <div key={i} className="AddOn">

                                <div className="AddOnLeftContainer">
                                    <div className="checkDiv">
                                        <div className="checkBox">
                                            <div className="arrow"></div>
                                        </div>
                                    </div>

                                    <div className="textDiv">
                                        <b>{d.title}</b>
                                        <p>{d.description}</p>
                                    </div>
                                </div>                                

                                <div className="priceDiv">
                                    <p>+${d.yearly}/yr</p>
                                </div>

                            </div>
                    )
                )
            }
            </div>

            <div className="switchStep">
                <button className="BtnBack" onClick={handlePrevious}>Go Back</button>
                <button className="BtnNext" onClick={handleNext}>Next Step</button>
            </div>
            
        </div>
    )
}