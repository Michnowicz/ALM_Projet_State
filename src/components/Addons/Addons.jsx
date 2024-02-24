import { useState } from "react"
import "./Addons.css"
import Data from "./Addons.json"



export default function Addons({display, hidden, price,addonsChoosed, setAddonsChoosed}) {   

    function handleClick(e) {
        console.log(e.target);
        // let newAddonsChoosed =  addonsChoosed.map((a, i)=>{
        //     if (e.target === i) {
        //         return !a
        //     } else {
        //         return a
        //     }
        // })
        // setAddonsChoosed(newAddonsChoosed)
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

                            <div select={d.title} key={i} className={addonsChoosed[i] === true ? 'AddOn clicked' : 'AddOn'} onClick={handleClick}>

                                <div select={d.title} className="AddOnLeftContainer">
                                    <div select={d.title} className="checkDiv">
                                        <div select={d.title} className="checkBox">
                                            <div select={d.title} className="arrow"></div>
                                        </div>
                                    </div>

                                    <div select={d.title} className="textDiv">
                                        <b select={d.title}>{d.title}</b>
                                        <p select={d.title}>{d.description}</p>
                                    </div>
                                </div>                                

                                <div select={d.title} className="priceDiv">
                                    {
                                    price === 'Monthly' ?
                                    <p select={d.title}>+${d.monthly}/mo</p>
                                    :
                                    <p select={d.title}>+${d.yearly}/yr</p>
                                    }
                                </div>

                            </div>
                    )
                )
            }
            </div>
            
        </div>
    )
}