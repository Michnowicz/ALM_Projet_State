import "./Addons.css"
import AddonsData from "./Addons.json"




export default function Addons({hidden, price,addonsChoosed, setAddonsChoosed, plan}) {  

    function handleClick(e) {
        let newAddonsChoosed =  addonsChoosed.map((a, i)=>{
            if (e.target.getAttribute('index') == i) {
                return !a
            } else {
                return a
            }
        })
        setAddonsChoosed(newAddonsChoosed)
    }

    return(
        <div className={hidden}>

            <div className="Title">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>

            <div className="offers">
            {
                AddonsData.map(
                    (d,i) => 
                    (

                            <div index={i} select={d.title} key={i} className={addonsChoosed[i] === true ? 'AddOn clicked' : 'AddOn'} onClick={handleClick}>

                                <div index={i} select={d.title} className="AddOnLeftContainer">
                                    <div index={i} select={d.title} className="checkDiv">
                                        <div index={i} select={d.title} className={addonsChoosed[i] === true ? "checkBoxClicked" : "checkBox"}>
                                            <div index={i} select={d.title} className="arrow"></div>
                                        </div>
                                    </div>

                                    <div index={i} select={d.title} className="textDiv">
                                        <b index={i} select={d.title}>{d.title}</b>
                                        <p index={i} select={d.title}>{d.description}</p>
                                    </div>
                                </div>                                

                                <div index={i} select={d.title} className="priceDiv">
                                    {
                                    price === 'Monthly' ?
                                    <p index={i} select={d.title}>+${d.monthly}/mo</p>
                                    :
                                    <p index={i} select={d.title}>+${d.yearly}/yr</p>
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