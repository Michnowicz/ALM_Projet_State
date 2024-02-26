import "./Navigation.css"
import Data from "./Navigation.json"


export default function Navigation({count}) {

    

    return(
        <div className="Navigation">

            {
                Data.map((d,i)=>(
                    <div key={i} className="Step">
                        <div className={count === i ? "roundBorder active" : "roundBorder"}>
                            <p>{d.step}</p>
                        </div>
                        <div className="stepText">
                            <p>{d.title}</p>
                            <b>{d.description}</b>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}