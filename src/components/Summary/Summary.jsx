import { useEffect, useState } from "react"
import "./Summary.css"
import Addons from "../Addons/Addons.json"
import Plans from "../Plan/Plan.json"

export default function Summary({display, total, setTotal, setDisplay, setCount, hidden, addonsChoosed, plan, price }) {

    let [addonPrice, setAddonPrice] = useState([])


    useEffect(()=>{
        Plans.map((p, i)=>{
            if (p.title === plan) {
                if (price === 'Monthly') {
                    setTotal(p.monthlyPrice + addonPrice[0]+ addonPrice[1]+ addonPrice[2])
                } else {
                    setTotal(p.yearlyPrice + addonPrice[0]+ addonPrice[1]+ addonPrice[2])
                }
                
            }
            
        })

    },[addonPrice])

    useEffect(()=>{
        if (display === 'summary') {
            let newAddonPrice = Addons.map((a, i)=>{
                if (addonsChoosed[i] === true) {
                    if (price === 'Monthly') {
                        return a.monthly
                    } else if (price === 'Yearly') {
                        return a.yearly
                    }
                } else {
                    return 0
                }
            })
            setAddonPrice(newAddonPrice)
        }
    },[display])


    function handleChange() {
        setDisplay("plan")
        setCount(1)
    }
    

    return(
        <div className={hidden}>

            <div className="Title">
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
            </div>

            <div className="summaryOffer">

                <div className="selectedPlan">
                    {/* Mettre props selon le plan sélectionné */}
                    <div className="planText">
                        <b>{plan}({price})</b>
                        <p onClick={handleChange}>Change</p>
                    </div>
                    <div className="planPrice">
                        {
                            Plans.map((p,i) => 
                            (
                                <p key={i}>{(p.title == plan && price == 'Monthly') ? 
                                `$${p.monthlyPrice}/mo`
                                : 
                                (p.title == plan && price == 'Yearly') ?
                                `$${p.yearlyPrice}/yr`
                                :
                                ''
                                }</p>
                            ))
                        }
                        
                    </div>
                </div>

                <hr />

                <div className="selectedAddons">
                        {
                            Addons.map((addOn, i)=>(
                                <div key={i} className="selectedAddon">
                                    <div className="addonText">
                                        {
                                            addonsChoosed[i] === true ? 
                                            <p>{addOn.title}</p> 
                                            : 
                                            <p className="hidden"></p>
                                        }
                                    </div>
                                    <div className="addonPrice">
                                        {
                                            (addonsChoosed[i] === true && price === 'Monthly') ? 
                                            `$${addOn.monthly}/mo`
                                            :
                                            (addonsChoosed[i] === true && price === 'Yearly') ?
                                            `$${addOn.yearly}/yr`
                                            :
                                            ''
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    
                </div>
            </div>

            <div className="summaryTotal">
                <p>{price === 'Monthly' ? `Total (per month)` : `Total (per Year)`}</p>
                <b>{price === 'Monthly' ? `$${total}/mo` : `$${total}/yr`}</b>
            </div>

        </div>
    )
}