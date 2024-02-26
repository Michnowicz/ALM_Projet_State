import "./Confirm.css"


export default function Confirm({display}) {
    
    return(
        <div className={display === 'confirm' ? "Confirm" : "hidden"}>
            <div className="outerCircle">
                <div className="innerCircle">
                    <i className="fa-solid fa-check"></i>
                </div>
            </div>
            <div className="confirmText">
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </div>
    )
}