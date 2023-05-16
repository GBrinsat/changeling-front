import { useState, useEffect } from "react"

import axios from "axios"

function RaceNameGender(props) {

    const [race, SetRace] = useState("dragonborn")
    const [name, SetName] = useState("")
    const [gender, SetGender] = useState("female")
    
    function handleRaceChange(e) {
        e.preventDefault()
        SetRace(e.target.value)
    }

    function handleNameChange(e) {
        e.preventDefault()
        SetName(e.target.value)
    }

    function handleGenderChange(e) {
        e.preventDefault()
        console.log(e.target.value)
        SetGender(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        const storedToken = localStorage.getItem("authToken")
        const body = {race, name, gender}

        axios.put(`https://changelingbackend.fly.dev/character/update/${props.id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                console.log(response)
                props.changeComponents1()
            })
    }

    function descriptionSwitch(param) {
        switch(param) {
            case `dragonborn`:
                return `Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.`
            case `dwarf`:
                 return `Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.`
            case `elf`:
                return `Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.`
            case `gnome`:
                return `A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.`
            case `half-elf`:
                return `Half-elves combine what some say are the best qualities of their elf and human parents.`
            case `half-orc`:
                return `Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.`
            case `halfling`:
                return `The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.`
            case `human`:
                return `Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.`
            case `tiefling`:
                return `Tieflings are a race with demonic or infernal ancestry. They have horns, pointed tails, and other devilish features, but also possess a natural charisma and affinity for magic.`
        }
    }

    return(
        <>

            <div className="character-topbox"></div>

            <form className="character-form" onSubmit={submitHandler}>

                <select className="character-creation-select" name="race" onChange={handleRaceChange}>
                    <option value="dragonborn">Dragonborn</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="elf">Elf</option>
                    <option value="gnome">Gnome</option>
                    <option value="half-elf">Half-Elf</option>
                    <option value="halfling">Halfling</option>
                    <option value="half-orc">Half-Orc</option>
                    <option value="human">Human</option>
                    <option value="tiefling">Tiefling</option>
                </select>

                <p className="description">{descriptionSwitch(race)}</p>

                <select className="character-creation-select" name="gender" onChange={handleGenderChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>

                <input type="text" placeholder="Name" onChange={handleNameChange} />

                

                <div className="button-box">
                <button className="back-button">Back</button>
                <button className="continue-button" type="submit">Continue</button>
                </div>

            </form>
        </>
    )
}

export default RaceNameGender