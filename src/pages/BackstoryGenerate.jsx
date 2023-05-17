import axios from "axios"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import Navbar from "../components/Navbar"

function BackstoryGenerate() {

    const { user } = useContext(AuthContext);

    const [userData, setUserData] = useState(null)
    const [backstory, setBackstory] = useState("")
    const [backstoryUpdate, setBackstoryUpdate] = useState("")
    const [backstoryId, setBackstoryId] = useState("")

    const [option1, setOption1] = useState("none")
    const [option2, setOption2] = useState("none")
    const [option3, setOption3] = useState("none")
    const [showText, setShowText] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    const navigate = useNavigate()

    function getUser() {

        console.log("test3")
        const userId = user._id

        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`${import.meta.env.VITE_API_URL}/user/find/${userId}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setUserData(response.data.user)
                console.log(response)
                if(response.data.user.character[response.data.user.character.length-1].backstory.length > 0) {
                    scrubBackstory(response.data.user.character[response.data.user.character.length-1].backstory[0])
                }
            })
    }

    useEffect(() => {
        getUser()
    },[])

    useEffect(() => {

        if(backstoryUpdate !== "" ) {

            console.log("updating backstory")

        const storedToken = localStorage.getItem("authToken")
        const body = {text: backstoryUpdate, option1, option2, option3}

        axios.put(`${import.meta.env.VITE_API_URL}/api/backstories/${backstoryId}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`,
                    "Content-Type": "application/json"}}
        )
            .then(() => {
                navigate("/profile")
            })
        } else {return}
    }, [backstoryUpdate])

    useEffect(() => {
        if(backstoryId !== ""){
        generateBackstory()
        }
    }, [backstoryId])

    function generateBackstory() {

        console.log("test")

        /* const characterId = userData.character[userData.character.length-1]._id
        const storedToken = localStorage.getItem("authToken")

        axios.get(`${import.meta.env.VITE_API_URL}/api/backstories/generate`,
            { headers: {    Authorization: `Bearer ${storedToken}`,
                            id: backstoryId,
                            character: characterId,
                            "Content-Type": "application/json" }})
                .then(response => {
                    setBackstory(response.data.message.content)
                    setShowSpinner(false)
                        }) */
    }

    function scrubBackstory(id) {

        console.log("test5")

        /* setOption1("none")
        setOption2("none")
        setOption3("none")
        setBackstory("")

        const storedToken = localStorage.getItem("authToken")
        const body = {text: backstoryUpdate, option1, option2, option3}

        axios.put(`${import.meta.env.VITE_API_URL}/api/backstories/${id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`,
                    "Content-Type": "application/json"}}
        ) */
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log("test1")

        /* setShowText(true)
        setShowSpinner(true)

        const characterId = userData.character[userData.character.length-1]._id
        let createdBackstory = null

        const storedToken = localStorage.getItem("authToken")
        const body = {option1, option2, option3, character: characterId}

        if(!userData.character[userData.character.length-1].backstory[0]) {
            axios.post(`${import.meta.env.VITE_API_URL}/api/backstories/create`, body,
            { headers: { Authorization: `Bearer ${storedToken}`,
                        "Content-Type": "application/json"}}
            )
            .then(response => {
                createdBackstory = response
                setBackstoryId(createdBackstory.data.backstory[0])
            })
        } else {setBackstoryId(userData.character[userData.character.length-1].backstory[0])}   */
    }

    function handleChange1(e) {
        e.preventDefault()
        setOption1(e.target.value)
    }
    function handleChange2(e) {
        e.preventDefault()
        setOption2(e.target.value)      
    }
    function handleChange3(e) {
        e.preventDefault()
        setOption3(e.target.value)
    }

    function handleBack(e) {
        e.preventDefault()
        scrubBackstory(userData.character[userData.character.length-1].backstory[0])
        setBackstory("")
        setShowText(false)
    }

    function handleBackstorySubmit(e) {
        e.preventDefault()

        setBackstoryUpdate(e.target.backstoryfield.value)
    }
    return(
        <>
        <Navbar />
        {showText === false ?  
        <>

        <div className="character-topbox"></div>

        <form className="backstory-form" onSubmit={handleSubmit}>

            <p className="backstory-header">Choose some options for your backstory:</p>

            <select className="character-creation-select"  name="optionals" onChange={handleChange1}>
                <option value="none">Add an optional addition</option>
                <option value="Add a dark secret">Add a dark secret</option>
                <option value="Grew up at the sea">Grew up at the sea</option>
                <option value="Has a family of their own">Has a family of their own</option>
                <option value="Is a criminal">Is a criminal</option>
                <option value="Lost their parents">Lost their parents</option>
                <option value="Wants to find true love">Wants to find true love</option>
                <option value="Grew up in a village">Grew up in a village</option>
                <option value="Is in debt to the wrong people">Is in debt to the wrong people</option>
                <option value="Was born on a battlefield">Was born on a battlefield</option>
                <option value="Was born during a storm">Was born during a storm</option>
            </select>
            <select className="character-creation-select"  name="optionals" onChange={handleChange2}>
                <option value="none">Add an optional addition</option>
                <option value="Lived in the Feywild for a time">Lived in the Feywild for a time</option>
                <option value="Has Amnesia">Has Amnesia</option>
                <option value="Has a nemesis">Has a nemesis</option>
                <option value="Has a grievious injury">Has a grievious injury</option>
                <option value="Stumbled into an inheritance">Stumbled into an inheritance</option>
                <option value="Had a near death experience with a monster">Had a near death experience with a monster</option>
                <option value="Posesses a specific personal trinket">Posesses a specific personal trinket</option>
                <option value="Was at some point incarcerated">Was at some point incarcerated</option>
                <option value="Witnessed a demon summoning">Witnessed a demon summoning</option>
                <option value="Had a premonition of things to come in a dream">Had a premonition of things to come in a dream</option>
            </select>
            <select className="character-creation-select"  name="optionals" onChange={handleChange3}>
                <option value="none">Add an optional addition</option>
                <option value="A friend betrayed them">A friend betrayed them</option>
                <option value="Is estranged from their family">Is estranged from their family</option>
                <option value="Fought in a war">Fought in a war</option>
                <option value="Was cursed by a Fiend">Was cursed by a Fiend</option>
                <option value="Was saved by an adventuring party">Was saved by an adventuring party</option>
                <option value="Witnessed the death of a friend">Witnessed the death of a friend</option>
                <option value="Has an embarrassing life-goal">Has an embarrassing life-goal</option>
                <option value="Was raised by wolves">Was raised by wolves</option>
                <option value="Is scared of the forest">Is scared of the forest</option>
                <option value="Is blind">Is blind</option>
            </select>

        <button className="button" type="submit">Generate your backstory!</button>
            
        </form>
        </>

        : //returnery

        <div>  
        {showSpinner === true && !backstory ? <div className="backstory-loader"><p>Writing backstory...</p> <div className="dots-5"></div></div> : <></>}
        
        {backstory && 
        <>

        <div className="character-topbox"></div>

        <form className="backstory-form" onSubmit={handleBackstorySubmit}>
            <textarea className="backstory-field" name="backstoryfield" cols="30" rows="10">{backstory}</textarea>

            <div className="button-box">
                <button className="back-button" onClick={handleBack}>Back</button> 
                <button className="continue-button" type="submit">Accept</button>
            </div>

        </form>

         
        </>
        }
        </div>  

        }   
        </>
    )
}

export default BackstoryGenerate