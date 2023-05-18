

function SheetBackstory(props) {
    return(
        <>
        <div className="character-form-name">
            <h2 className="sheet-h2">Backstory</h2>
            <div className="backstory-box">
                <p className="backstory-text">{props.text}</p>
                <div className="backstory-small">
                    <p>Alignment: {props.character.alignment}</p>
                    <p>Background: {props.character.background}</p>
                </div>
            </div>
            <div className="bottom-box"></div>
        </div>
        <div className="sheet-bottombox"></div>
        </>
    )
}

export default SheetBackstory