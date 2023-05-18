import { useState, useEffect } from "react"

import axios from "axios"



function Class(props) {

    const [playerclass, SetPlayerClass] = useState("Barbarian")
    
    function handlePlayerClassChange(e) {
        e.preventDefault()
        SetPlayerClass(e.target.value)
    }

    function descriptionSwitch(param) {
        switch(param) {
            case `Barbarian`:
                return `Barbarians are powerful warriors who rely on their primal instincts and fury to fuel their attacks in combat. They eschew heavy armor and instead rely on their toughness to shrug off blows. Their fierce demeanor and savage attacks make them a force to be reckoned with on the battlefield.`
            case `Bard`:
                 return `Bards are charismatic performers who use their music, words, and magic to inspire their allies and confound their enemies. They can cast spells, heal allies, and buff their party members while also dealing damage with their musical talents.`
            case `Cleric`:
                return `Clerics are holy warriors who are empowered by their faith in a deity. They can heal allies, smite enemies, and cast spells that harness divine power. They are also skilled in using weapons and armor to defend themselves and their allies.`
            case `Druid`:
                return `Druids are mystics who are deeply connected to nature. They can transform into animals, cast spells that manipulate the elements, and summon creatures to fight on their behalf. They also have the ability to heal allies and control the battlefield with their nature magic.`
            case `Fighter`:
                return `Fighters are versatile combatants who specialize in a variety of weapons and armor. They can be archers, sword-and-shield wielders, or two-handed weapon experts. Their ability to take a hit and keep fighting, along with their proficiency in many weapons and fighting styles, makes them a reliable and stalwart member of any adventuring party.`
            case `Monk`:
                return `Monks are highly skilled martial artists who use their bodies as weapons. They are fast, agile, and have incredible control over their movements. They can deal significant damage with their fists and feet, and can use Ki energy to enhance their attacks.`
            case `Paladin`:
                return `Paladins are holy knights who are devoted to a particular deity or cause. They can heal allies, smite enemies with divine power, and use spells to support their allies. They are also skilled in using weapons and heavy armor to defend themselves and their allies.`
            case `Ranger`:
                return `Rangers are skilled hunters and trackers who are at home in the wilderness. They can fight from a distance with their bows or up close with their swords, and they have a range of abilities that allow them to track and survive in the wilderness. They can also summon animal companions to fight alongside them.`
            case `Rogue`:
                return `Rogues are stealthy and agile thieves who excel at sneaking, lockpicking, and backstabbing. They can deal massive damage with their sneak attacks, and they have a range of abilities that allow them to bypass traps and avoid detection.`
            case `Sorcerer`:
                return `Sorcerers are born with innate magical abilities that they can use to cast spells. They can manipulate the elements, control minds, and even summon creatures to fight on their behalf. They are also known for their ability to metamorphose their bodies and cast spells through sheer force of will.`
            case `Warlock`:
                return `Warlocks are spellcasters who have made a pact with a powerful otherworldly entity. They can cast spells that harness dark powers, summon creatures from beyond, and even change their shape. They are also known for their ability to regenerate their magical energy by making deals with their patron.`
            case `Wizard`:
                return `Wizards are highly intelligent and studious spellcasters who specialize in manipulating arcane magic. They can cast spells that manipulate the elements, and even alter the fabric of reality itself. They are also skilled in creating magical items and scrolls.`

        }
    }

    function setClass(){
        console.log(document.querySelector("#classSelect").value = props.class)
    }

    useEffect(() => {
        setClass()
    }, [])

    function submitHandler(e) {
        e.preventDefault()

        const storedToken = localStorage.getItem("authToken")
        const body = {class :playerclass}

        axios.put(`${import.meta.env.VITE_API_URL}/character/update/${props.id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(() => {
                props.changeComponents2()
            })
    }

    return(
        <>

            <div className="character-topbox"></div>

            <form className="character-form-name" onSubmit={submitHandler}>

                <p className="character-creation-text-start">Choose a class</p>
            
                <select id="classSelect" className="character-creation-select" name="playerclass" onChange={handlePlayerClassChange}>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Bard">Bard</option>
                    <option value="Cleric">Cleric</option>
                    <option value="Druid">Druid</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Monk">Monk</option>
                    <option value="Paladin">Paladin</option>
                    <option value="Ranger">Ranger</option>
                    <option value="Rogue">Rogue</option>
                    <option value="Sorcerer">Sorcerer</option>
                    <option value="Warlock">Warlock</option>
                    <option value="Wizard">Wizard</option>
                </select>

                <p className="description-class">{descriptionSwitch(playerclass)}</p>

                <div className="button-box">
                <button className="back-button" type="button" onClick={props.changeComponentsBack2}>Back</button>
                <button className="continue-button" type="submit">Continue</button>
                </div>

            </form>
        </>
    )
}

export default Class