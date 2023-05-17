import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Navbar from "../components/Navbar"
import StatCard from "../components/CharacterCreation/StatCard"

import axios from "axios"

function CharacterSheetEdit() {

    const { characterId } = useParams()

    const navigate = useNavigate();

    const [redirect, setRedirect] = useState(false)

    const [character, setCharacter] = useState(null)

    const [race, setRace] = useState("dragonborn")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("female")
    const [playerclass, setPlayerClass] = useState("barbarian")

    const [armorClass, setArmorClass] = useState(0)
    const [HPMax, setHPMax] = useState(0)
    const [HPCurrent, setHPCurrent] = useState(0)
    const [initiative, setInitiative] = useState(0)
    const [speed, setSpeed] = useState(0)

    const [backstory, setBackstory] = useState(null)
    const [alignment, setAlignment] = useState("")
    const [background, setBackground] = useState("")
    

    const [str, setStr] = useState(10)
    const [strmod, setStrmod] = useState(0)
    const [dex, setDex] = useState(10)
    const [dexmod, setDexmod] = useState(0)
    const [con, setCon] = useState(10)
    const [conmod, setConmod] = useState(0)
    const [int, setInt] = useState(10)
    const [intmod, setIntmod] = useState(0)
    const [wis, setWis] = useState(10)
    const [wismod, setWismod] = useState(0)
    const [cha, setCha] = useState(10)
    const [chamod, setChamod] = useState(0)

    /* ------------ get user and character ------------ */

    function getCharacter() {
        
        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`${import.meta.env.VITE_API_URL}/character/find/${characterId}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setCharacter(response.data)
            })
    }

    useEffect(() => {
        getCharacter()
    }, [])

    useEffect(() => {
        if(character != null && character.backstory[0] != undefined){
            const storedToken = localStorage.getItem("authToken")
        
            axios.get(`${import.meta.env.VITE_API_URL}/backstory/${character.backstory[0]}`,
            { headers: { Authorization: `Bearer ${storedToken}`}}
            )
                .then(response => {
                    setBackstory(response.data.text)
                    console.log(backstory)
                })
            }
    }, [name])

    useEffect(() => {
        
        if(character != null) {
        setName(character.name)
        setRace(character.race)
        setPlayerClass(character.class)
        setGender(character.gender)
        setStr(character.stats.str)
        setStrmod(character.stats.strmod)
        setDex(character.stats.dex)
        setDexmod(character.stats.dexmod)
        setCon(character.stats.con)
        setConmod(character.stats.conmod)
        setInt(character.stats.int)
        setIntmod(character.stats.intmod)
        setWis(character.stats.wis)
        setWismod(character.stats.wismod)
        setCha(character.stats.cha)
        setChamod(character.stats.chamod)
        setArmorClass(character.armorclass)
        setHPMax(character.hpmax)
        setHPCurrent(character.hpcurrent)
        setInitiative(character.initiative)
        setSpeed(character.speed)
        setBackground(character.background)
        setAlignment(character.alignment)
        }
       
    }, [character])


    /*     --------- stat change effect handlers -------- */

    useEffect(() => {
        if(str === 9){
            setStrmod(-1)
        }
        if(str === 10 || str === 11){
            setStrmod(0)
        }
        if(str === 12 || str === 13){
            setStrmod(1)
        }
        if(str === 14 || str === 15){
            setStrmod(2)
        }
        if(str === 16 || str === 17){
            setStrmod(3)
        }
        if(str === 18 || str === 19){
            setStrmod(4)
        }
        if(str >= 20){
            setStrmod(5)
        }
    }, [str])

    useEffect(() => {
        if(dex === 9){
            setDexmod(-1)
        }
        if(dex === 10 || dex === 11){
            setDexmod(0)
        }
        if(dex === 12 || dex === 13){
            setDexmod(1)
        }
        if(dex === 14 || dex === 15){
            setDexmod(2)
        }
        if(dex === 16 || dex === 17){
            setDexmod(3)
        }
        if(dex === 18 || dex === 19){
            setDexmod(4)
        }
        if(dex >= 20){
            setDexmod(5)
        }
    }, [dex])

    useEffect(() => {
        if(con === 9){
            setConmod(-1)
        }
        if(con === 10 || con === 11){
            setConmod(0)
        }
        if(con === 12 || con === 13){
            setConmod(1)
        }
        if(con === 14 || con === 15){
            setConmod(2)
        }
        if(con === 16 || con === 17){
            setConmod(3)
        }
        if(con === 18 || con === 19){
            setConmod(4)
        }
        if(con >= 20){
            setConmod(5)
        }
    }, [con])

    useEffect(() => {
        if(int === 9){
            setIntmod(-1)
        }
        if(int === 10 || int === 11){
            setIntmod(0)
        }
        if(int === 12 || int === 13){
            setIntmod(1)
        }
        if(int === 14 || int === 15){
            setIntmod(2)
        }
        if(int === 16 || int === 17){
            setIntmod(3)
        }
        if(int === 18 || int === 19){
            setIntmod(4)
        }
        if(int >= 20){
            setIntmod(5)
        }
    }, [int])

    useEffect(() => {
        if(wis === 9){
            setWismod(-1)
        }
        if(wis === 10 || wis === 11){
            setWismod(0)
        }
        if(wis === 12 || wis === 13){
            setWismod(1)
        }
        if(wis === 14 || wis === 15){
            setWismod(2)
        }
        if(wis === 16 || wis === 17){
            setWismod(3)
        }
        if(wis === 18 || wis === 19){
            setWismod(4)
        }
        if(wis >= 20){
            setWismod(5)
        }
    }, [wis])

    useEffect(() => {
        if(cha === 9){
            setChamod(-1)
        }
        if(cha === 10 || cha === 11){
            setChamod(0)
        }
        if(cha === 12 || cha === 13){
            setChamod(1)
        }
        if(cha === 14 || cha === 15){
            setChamod(2)
        }
        if(cha === 16 || cha === 17){
            setChamod(3)
        }
        if(cha === 18 || cha === 19){
            setChamod(4)
        }
        if(cha >= 20){
            setChamod(5)
        }
    }, [cha])

  /*   --------- Stat change functions -------- */

    function strengthChange(op) {
        let strNew = str
        if(op === "+" && str < 20) {
            setStr(strNew+=1)
            } else if(op === "-" && str > 8) {
                setStr(strNew-=1)
            }
            
        }

    function dexterityChange(op) {
        let dexNew = dex
        if(op === "+" && dex < 20) {
            setDex(dexNew+=1)
            } else if(op === "-" && dex > 8) {
                setDex(dexNew-=1)
            }
            
        }

    function constitutionChange(op) {
        let conNew = con
        if(op === "+" && con < 20) {
            setCon(conNew+=1)
            } else if(op === "-" && con > 8) {
                setCon(conNew-=1)
            }
            
        }

    function intelligenceChange(op) {
        let intNew = int
        if(op === "+" && int < 20) {
            setInt(intNew+=1)
            } else if(op === "-" && int > 8) {
                setInt(intNew-=1)
            }
            
        }

    function wisdomChange(op) {
        let wisNew = wis
        if(op === "+" && wis < 20) {
            setWis(wisNew+=1)
            } else if(op === "-" && wis > 8) {
                setWis(wisNew-=1)
            }
            
        }

    function charismaChange(op) {
        let chaNew = cha
        if(op === "+" && cha < 20) {
            setCha(chaNew+=1)
            } else if(op === "-" && cha > 8) {
                setCha(chaNew-=1)
            }
            
        }
    
    function handleRaceChange(e) {
        e.preventDefault()
        setRace(e.target.value)
    }

    function handleNameChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleGenderChange(e) {
        e.preventDefault()
        setGender(e.target.value)
    }

    function handlePlayerClassChange(e) {
        e.preventDefault()
        setPlayerClass(e.target.value)
    }

    function handleArmorClassChange(e) {
        e.preventDefault()
        setArmorClass(e.target.value)
    }

    function handleHPMaxChange(e) {
        e.preventDefault()
        setHPMax(e.target.value)
    }

    function handleHPCurrentChange(e) {
        e.preventDefault()
        setHPCurrent(e.target.value)
    }

    function handleInitiativeChange(e) {
        e.preventDefault()
        setInitiative(e.target.value)
    }

    function handleSpeedChange(e) {
        e.preventDefault()
        setSpeed(e.target.value)
    }

    function handleBackgroundChange(e) {
        e.preventDefault()
        setBackground(e.target.value)
    }

    function handleAlignmentChange(e) {
        e.preventDefault()
        setAlignment(e.target.value)
    }

    function handleBackstoryChange(e) {
        e.preventDefault()
        setBackstory(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        const storedToken = localStorage.getItem("authToken")
        const body = {name,
                      race,
                      class: playerclass,
                      gender,
                      stats:{
                        str,
                        strmod,
                        dex,
                        dexmod,
                        con,
                        conmod,
                        int,
                        intmod,
                        wis,
                        wismod,
                        cha,
                        chamod},
                      armorclass : armorClass,
                      hpmax : HPMax,
                      hpcurrent : HPCurrent,
                      initiative,
                      speed,
                      background,
                      alignment,
                      }

        axios.put(`${import.meta.env.VITE_API_URL}/character/update/${character._id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(() => {
                const body = {text: backstory}
                axios.put(`${import.meta.env.VITE_API_URL}/backstory/${character.backstory[0]}`, body,
                { headers: { Authorization: `Bearer ${storedToken}`}}
                )
                    .then(() => {
                        if(redirect === true) {
                            navigate("/backstory")
                        }
                    })
            })

           
    }

    function redirectNow() {
        setRedirect(true)
    }

    return(
        
        <>
        {character &&
        
        <>
            <Navbar />

            <div className="character-topbox"></div>

            <form className="character-form" onSubmit={submitHandler}>

                <input type="text" placeholder={character.name} onChange={handleNameChange} />

                <select className="character-creation-select" name="race" onChange={handleRaceChange}>
                    <option value="" disabled selected>{character.race}</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="Half-Elf">Half-Elf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="Half-Orc">Half-Orc</option>
                    <option value="Human">Human</option>
                    <option value="Tiefling">Tiefling</option>
                </select>

                <select className="character-creation-select" name="gender" onChange={handleGenderChange}>
                    <option value="" disabled selected>{character.gender}</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>

                <select className="character-creation-select" name="playerclass" onChange={handlePlayerClassChange}>
                    <option value="" disabled selected>{character.class}</option>
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

                <div className="edit-box-small">
                    <div className="edit-sheet-card">
                        <p className="edit-sheet-heading">Armor Class</p>
                        <input className="edit-input" type="text" placeholder={character.armorclass} onChange={handleArmorClassChange} />
                    </div>
                    <div className="edit-sheet-card">
                        <p className="edit-sheet-heading">Hit Points</p>
                        <div className="input-field">
                        <p>Max:</p>
                        <input className="edit-input" type="text" placeholder={character.hpmax} onChange={handleHPMaxChange} />
                        </div>
                        <div className="input-field">
                        <p>current:</p>
                        <input className="edit-input" type="text" placeholder={character.hpcurrent} onChange={handleHPCurrentChange} />
                        </div>
                    </div>
                </div>

                <div className="edit-box-small">
                    <div className="edit-sheet-card">
                        <p className="edit-sheet-heading">Initiative</p>
                        <input className="edit-input" type="text" placeholder={character.initiative} onChange={handleInitiativeChange} />
                    </div>
                    <div className="edit-sheet-card">
                        <p className="edit-sheet-heading">Speed</p>
                        <div className="input-field">
                        <input className="edit-input" type="text" placeholder={character.speed} onChange={handleSpeedChange} />
                        <p>ft.</p>
                        </div>
                    </div>
                </div>



            {/* --------- Stats --------- */}


            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Strength</p>
                    <div className="stat-box">
                    <StatCard statname={"Strength"}stat={str} mod={strmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => strengthChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => strengthChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Dexterity</p>
                    <div className="stat-box">
                    <StatCard statname={"Dexterity"}stat={dex} mod={dexmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => dexterityChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => dexterityChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>

            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Constitution</p>
                    <div className="stat-box">
                    <StatCard statname={"Constitution"}stat={con} mod={conmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => constitutionChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => constitutionChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Intelligence</p>
                    <div className="stat-box">
                    <StatCard statname={"Intelligence"}stat={int} mod={intmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => intelligenceChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => intelligenceChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>
            
            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Wisdom</p>
                    <div className="stat-box">
                    <StatCard statname={"Wisdom"}stat={wis} mod={wismod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => wisdomChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => wisdomChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Charisma</p>
                    <div className="stat-box">
                    <StatCard statname={"Charisma"}stat={cha} mod={chamod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => charismaChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => charismaChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>

            {backstory && <textarea className="backstory-field" onChange={handleBackstoryChange} name="backstoryfield">{backstory}</textarea>}

            <select className="character-creation-select" name="alignment" onChange={handleAlignmentChange}>
                <option value="" disabled selected>{character.alignment}</option>
                <option value="Lawful Good">Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="Neutral">Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
            </select>

            <select className="character-creation-select" name="background" onChange={handleBackgroundChange}>
                <option value="" disabled selected>{character.background}</option>
                <option value="Acolyte">Acolyte</option>
                <option value="Criminal">Criminal</option>
                <option value="Entertainer">Entertainer</option>
                <option value="Folk Hero">Folk Hero</option>
                <option value="Hermit">Hermit</option>
                <option value="Noble">Noble</option>
                <option value="Sage">Sage</option>
                <option value="Soldier">Soldier</option>
                <option value="Urchin">Urchin</option>
            </select>

            <button className="button" type="submit" onClick={redirectNow}>Generate a new backstory</button>
           
            <div className="button-box">
                <button className="back-button">Back</button>
                <button className="continue-button" type="submit">Save</button>
            </div>

            </form>
        </>
        }
        </>
    )
}

export default CharacterSheetEdit