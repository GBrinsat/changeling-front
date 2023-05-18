//components
import Navbar from "../components/Navbar"
import RaceNameGender from "../components/CharacterCreation/RaceNameGender"
import Class from "../components/CharacterCreation/Class"
import Stats from "../components/CharacterCreation/Stats"
import BackgroundAlignment from "../components/CharacterCreation/BackgroundAlignment"
import ClassQuiz from "../components/CharacterCreation/ClassQuiz"

//context
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CharacterCreationPage() {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const [userData, setUserData] = useState(null)
    const [character, setCharacter] = useState(null)

    //component switches
    const [switch1, setSwitch1] = useState(true)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)
    const [switch4, setSwitch4] = useState(false)
    const [switchQuiz, setSwitchQuiz] = useState(false)

    //class switch
    const [playerclass, setPlayerclass] = useState("Barbarian")

    function changeComponents1() {
        setSwitchQuiz(false)
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

    function changeComponentsBack1() {
        navigate("/profile")
    }

    function changeComponentsBack2() {
        setSwitchQuiz(true)
        setSwitch2(false)
    }

    function changeComponentsBack3() {
        setSwitch2(true)
        setSwitch3(false)
    }

    function changeComponentsBack4() {
        setSwitch3(true)
        setSwitch4(false)
    }

    function switchBarbarian(){
        setPlayerclass("Barbarian")
        changeComponents1()
    }

    function switchBard(){
        setPlayerclass("Bard")
        changeComponents1()
    }

    function switchCleric(){
        setPlayerclass("Cleric")
        changeComponents1()
    }

    function switchDruid(){
        setPlayerclass("Druid")
        changeComponents1()
    }

    function switchFighter(){
        setPlayerclass("Fighter")
        changeComponents1()
    }

    function switchMonk(){
        setPlayerclass("Monk")
        changeComponents1()
    }

    function switchPaladin(){
        setPlayerclass("Paladin")
        changeComponents1()
    }

    function switchRanger(){
        setPlayerclass("Ranger")
        changeComponents1()
    }

    function switchRogue(){
        setPlayerclass("Rogue")
        changeComponents1()
    }

    function switchSorcerer(){
        setPlayerclass("Sorcerer")
        changeComponents1()
    }

    function switchWarlock(){
        setPlayerclass("Warlock")
        changeComponents1()
    }

    function switchWizard(){
        setPlayerclass("Wizard")
        changeComponents1()
    }

    function switchQuizOn() {
        setSwitchQuiz(true)
        setSwitch1(false)
    }

    function switchQuizOff() {
        setSwitchQuiz(false)
        setSwitch1(true)
    }
    
    
    function getUser() {
        const userId = user._id

        const storedToken = localStorage.getItem("authToken")
    
        axios.get(`${import.meta.env.VITE_API_URL}/user/find/${userId}`,
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
            const i = userData.character.length-1
                setCharacter(userData.character[i])
        }
        
    }, [userData])

    return(
        <>
            {<Navbar />}

            {switch1 ? 

            character && <RaceNameGender id={character._id} switchQuizOn={switchQuizOn} changeComponentsBack1={changeComponentsBack1}/>

            :

                switchQuiz ?
                
                character && <ClassQuiz 
                                switchBarbarian={switchBarbarian}
                                switchBard={switchBard}
                                switchCleric={switchCleric}
                                switchDruid={switchDruid}
                                switchFighter={switchFighter}
                                switchMonk={switchMonk}
                                switchPaladin={switchPaladin}
                                switchRanger={switchRanger}
                                switchRogue={switchRogue}
                                switchSorcerer={switchSorcerer}
                                switchWarlock={switchWarlock}
                                switchWizard={switchWizard}
                                switchQuizOff={switchQuizOff}
                                changeComponents1={changeComponents1}
                                />

                    :

                    switch2 ? 
                        
                    character && <Class id={character._id} class={playerclass} changeComponents2={changeComponents2} changeComponentsBack2={changeComponentsBack2}/>

                    :

                    switch3 ?

                        character && <Stats id={character._id} changeComponents3={changeComponents3} changeComponentsBack3={changeComponentsBack3}/>

                        : 

                        <BackgroundAlignment id={character._id} changeComponentsBack4={changeComponentsBack4}/>
    

}

            

           {/*  {switch1 ? 

            character && <RaceNameGender id={character._id} changeComponents1={changeComponents1} changeComponentsBack1={changeComponentsBack1}/>

            :
            
                switch2 ? 
                    
                   character && <Class id={character._id} changeComponents2={changeComponents2} changeComponentsBack2={changeComponentsBack2}/>

                   :

                   switch3 ?

                    character && <Stats id={character._id} changeComponents3={changeComponents3} changeComponentsBack3={changeComponentsBack3}/>

                    : 

                     <BackgroundAlignment id={character._id} changeComponentsBack4={changeComponentsBack4}/>
                

            } */}
        </>
    )
}

export default CharacterCreationPage