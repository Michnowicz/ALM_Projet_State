import { useState } from "react"
import "./Info.css"


export default function Info() {

    let [name, setName] = useState('')
    

    return(
        <div className="Info">

            <div className="Title">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="Form">
                <div className="inputDiv">
                    <label htmlFor="name">Your name is: {name}</label>
                    <input type="text" id="name" placeholder="Vingt-Six" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Your email is: {name}</label>
                    <input type="email" id="email" placeholder="vingt_six@email.com" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="phone">Your email is: {name}</label>
                    <input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
                </div>
            </div>

            <div className="BtnNext">
                <button>Next Step</button>
            </div>

        </div>
    )
}