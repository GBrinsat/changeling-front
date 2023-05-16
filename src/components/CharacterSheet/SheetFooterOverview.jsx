import { useState } from "react"

function SheetFooterOverview(props) {

    return(
        <>
        <div className="sheet-footer-container">
            <div className="sheet-footer-button-container">
            <button className="sheet-footer-button active-button" onClick={props.changeComponents0}>Overview</button>
            <button className="sheet-footer-button" onClick={props.changeComponents1}>Ability Scores</button>
            <button className="sheet-footer-button sheet-button-right" onClick={props.changeComponents2}>Backstory</button>
            </div>
            <div className="sheet-footer-bottom"></div>
        </div>
        </>
    )
}

export default SheetFooterOverview