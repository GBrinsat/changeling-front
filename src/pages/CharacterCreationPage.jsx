//components
import Navbar from "../components/Navbar"
import RaceNameGender from "../components/CharacterCreation/RaceNameGender"
import Class from "../components/CharacterCreation/Class"
import Stats from "../components/CharacterCreation/Stats"
import BackgroundAlignment from "../components/BackgroundAlignment"

//context
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import { useState, useEffect } from "react"
import axios from "axios"

function CharacterCreationPage() {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState(null)
    const [character, setCharacter] = useState(null)

    //component switches
    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)
    const [switch4, setSwitch4] = useState(false)

    function changeComponents1() {
        setSwitch1(false)
        setSwitch2(true)
    }

    function changeComponents2() {
        setSwitch2(false)
        setSwitch3(true)
    }

    function changeComponents3() {
        setSwitch3(false)
        setSwitch4(true)
    }
    
    
    function getUser() {
        console.log(user)
        const userId = user._id

        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`http://localhost:5005/user/find/${userId}`,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                setUserData(response.data.user)
            })
    }

    useEffect(() => {
        getUser()
    },[])

    useEffect(() => {
        if(userData === null){
            return
        } else {
            console.log(userData)
            const i = userData.character.length-1
                setCharacter(userData.character[i])
                console.log(character)
        }
        
    }, [userData])

    return(
        <>
            {<Navbar />}

            {switch1 ? 

            character && <RaceNameGender id={character._id} changeComponents1={changeComponents1}/>

            :
            
                switch2 ? 
                    
                   character && <Class id={character._id} changeComponents2={changeComponents2}/>

                   :

                   switch3 ?

                   character && <Stats id={character._id} changeComponents3={changeComponents3}/>

                   : 

                   <BackgroundAlignment id={character._id}/>
                

            }
        </>
    )
}

export default CharacterCreationPage