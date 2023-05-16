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
                    <p className="sheet-buffer">15</p>
                </div>
                <div className="sheet-card">
                    <p className="sheet-heading">Hit Points</p>
                    <p>Max: 10</p>
                    <p>Current: 7</p>
                </div>
            </div>

            <div className="sheet-box-small">
                <div className="sheet-card">
                    <p className="sheet-heading">Initiative</p>
                    <p>+2</p>
                </div>
                <div className="sheet-card">
                    <p className="sheet-heading">Speed</p>
                    <p>25 feet</p>
                </div>
            </div>

            <Link className="link" to={"/characterSheet/edit"}>Edit</Link>
            
        </div>
       
        </>
    )
}

export default SheetMain