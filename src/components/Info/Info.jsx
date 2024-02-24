import { useState } from "react"
import "./Info.css"


export default function Info({display, hidden}) {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')

    //input style change on focus
    function handleFocus(e) {
        e.target.classList.add('onFocus')
    }

    //modification of useState on blur
    function handleChange(e) {
        e.target.classList.remove('onFocus')
        if (e.target.id === "name") {
            setName(e.target.value)    
        } else if (e.target.id === "email") {
            setEmail(e.target.value)
        } else if (e.target.id === "phone") {
            setPhone(e.target.value)
        }
        console.log(e.target.value);
    }

    // change diplay on click to change component in app
    function handleNext() {
        display('plan')
    }

    return(
        <div className={hidden}>

            <div className="Title">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className="Form">
                <div className="inputDiv">
                    <label htmlFor="name">Your name is : {name}</label>
                    <input onFocus={handleFocus} onBlur={handleChange} type="text" id="name" placeholder="Vingt-Six" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Your email is : {email}</label>
                    <input onFocus={handleFocus} onBlur={handleChange} type="email" id="email" placeholder="vingt_six@email.com" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="phone">Your phone number is : {phone}</label>
                    <input onFocus={handleFocus} onBlur={handleChange} type="text" id="phone" placeholder="e.g. +1 234 567 890" />
                </div>
            </div>

            <div className="BtnDiv">
                <button className="BtnNext" onClick={handleNext}>Next Step</button>
            </div>

        </div>
    )
}