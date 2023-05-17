import { Link } from "react-router-dom"

function SheetMain(props) {

    function toUppercase(string) {
        return string.slice(0,1).toUpperCase() + string.slice(1)
    }

    return(
        <>
        <div className="sheet-container">
            <h2>{props.character.name}</h2>
            <p>{toUppercase(props.character.race) + " " + toUppercase(props.character.class)}</p>
            <p>Level 1</p>

            <br />
            <br />

            <div className="sheet-box-small">
                <div className="sheet-card">
                    <p className="sheet-heading">Armor Class</p>
                    <p className="sheet-buffer">{props.character.armorclass}</p>
                </div>
                <div className="sheet-card">
                    <p className="sheet-heading">Hit Points</p>
                    <p>Max: {props.character.hpmax}</p>
                    <p>Current: {props.character.hpcurrent}</p>
                </div>
            </div>

            <div className="sheet-box-small">
                <div className="sheet-card">
                    <p className="sheet-heading">Initiative</p>
                    <p>{props.character.initiative}</p>
                </div>
                <div className="sheet-card">
                    <p className="sheet-heading">Speed</p>
                    <p>{props.character.speed} feet</p>
                </div>
            </div>

            <Link className="link" to={`/characterSheet/edit/${props.character._id}`}>Edit</Link>
            
        </div>
       
        </>
    )
}

export default SheetMain