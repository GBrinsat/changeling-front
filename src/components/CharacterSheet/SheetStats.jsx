import StatCard from "../CharacterCreation/StatCard"

function SheetStats(props) {
    return(
        <>
           <h2 className="sheet-h2">Ability Scores</h2>
            <div className="stat-box-large">
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Strength</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.str}</p>
                            <p>Modifier: {props.character.stats.strmod}</p>
                        </div>             
            </div>
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Dexterity</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.dex}</p>
                            <p>Modifier: {props.character.stats.dexmod}</p>
                        </div>             
                </div>
            </div>

            <div className="stat-box-large">
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Constitution</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.con}</p>
                            <p>Modifier: {props.character.stats.conmod}</p>
                        </div>             
            </div>
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Intelligence</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.int}</p>
                            <p>Modifier: {props.character.stats.intmod}</p>
                        </div>             
                </div>
            </div>

            <div className="stat-box-large">
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Wisdom</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.wis}</p>
                            <p>Modifier: {props.character.stats.wismod}</p>
                        </div>             
            </div>
                <div className="sheet-stat-box-small">
                <p className="sheet-stat-heading">Charisma</p>
                        <div className="sheet-stat-card">
                            <p>{props.character.stats.cha}</p>
                            <p>Modifier: {props.character.stats.chamod}</p>
                        </div>             
                </div>
            </div>

            <div className="sheet-container">
                <h2>Saving Throws</h2>
                <div className="saving-box">
                    <div className="saving-card">
                        <p>Str: +3</p>
                        <p>Con: 0</p>
                        <p className="saving-card-p">Wis: 0</p>
                    </div>
                    <div className="saving-card">
                        <p>Dex: +3</p>
                        <p>Int: 0</p>
                        <p className="saving-card-p">Cha: 0</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SheetStats