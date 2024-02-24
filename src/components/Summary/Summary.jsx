import "./Summary.css"

export default function Summary({display, hidden}) {
    


    // change diplay on click to change component in app
    function handlePrevious() {
        display('addons')
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
                        <b>Change to props</b>
                        <p>Change</p>
                    </div>
                    <div className="planPrice">
                        <p>$/mo</p>
                    </div>
                </div>

                <hr />

                <div className="selectedAddons">
                {/* Mettre un map par rapport aux addons sélectionnés */}
                    <div className="addonText">
                        <p>Service</p>
                    </div>
                    <div className="addonPrice">
                        <p>$/mo</p>
                    </div>
                </div>
            </div>

            <div className="summaryTotal">
                <p>Total (usestate month)</p>
                <b>$ /mo</b>
            </div>

        </div>
    )
}