import axios from "axios"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import Navbar from "../components/Navbar"
import SheetMain from "../components/CharacterSheet/SheetMain"
import SheetFooterOverview from "../components/CharacterSheet/SheetFooterOverview"
import SheetFooterAbility from "../components/CharacterSheet/SheetFooterAbility"
import SheetFooterBackstory from "../components/CharacterSheet/SheetFooterBackstory"
import SheetStats from "../components/CharacterSheet/SheetStats"
import SheetBackstory from "../components/CharacterSheet/SheetBackstory"

function CharacterSheetPage() {

    const { user } = useContext(AuthContext);
    const { characterId } = useParams()

    const [userData, setUserData] = useState(null)
    const [character, setCharacter] = useState(null)
    const [backstory, setBackstory] = useState(null)

    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)

    function getUser() {
        const userId = user._id

        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`http://localhost:5005/user/find/${userId}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setUserData(response.data.user)
            })
    }

    function getCharacter() {
        
        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`http://localhost:5005/character/find/${characterId}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setCharacter(response.data)
            })
    }

    function getBackstory() {

        if(character != null){
        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`http://localhost:5005/api/backstories/${character.backstory[0]}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setBackstory(response.data)
            })
        }
    }

    useEffect(() => {
        getUser()
        getCharacter()
    },[])

    useEffect(() => {
        getBackstory()
    },[character])

    function changeComponents0() {
        setSwitch1(true)
        setSwitch2(false)
        setSwitch3(false)
    }

    function changeComponents1() {
        setSwitch1(false)
        setSwitch2(true)
        setSwitch3(false)
    }
    
    function changeComponents2() {
        setSwitch1(false)
        setSwitch2(false)
        setSwitch3(true)
    }

    return(
        <>
        <Navbar />

        <div className="sheet-topbox"></div>

        {switch1 === true ? 
        
        <>
         {character && <SheetMain character={character}/>}
         <SheetFooterOverview changeComponents1={changeComponents1} changeComponents2={changeComponents2} changeComponents0={changeComponents0}/>
        </>
        :

        switch2 === true ?
 
        <>
        {character && <SheetStats character={character}/>}
        <SheetFooterAbility changeComponents1={changeComponents1} changeComponents2={changeComponents2} changeComponents0={changeComponents0}/>
        </>

        :

        switch3 === true ?
        
        <>
        {character && <SheetBackstory text={backstory.text} character={character}/>}
        <SheetFooterBackstory changeComponents1={changeComponents1} changeComponents2={changeComponents2} changeComponents0={changeComponents0}/>
        </>
        :

        <p>test</p>

        }
    
        </>
    )
}

export default CharacterSheetPage