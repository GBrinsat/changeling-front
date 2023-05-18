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

    //class switches

    const [barbarian, setBarbarian] = useState(false)
    const [bard, setBard] = useState(false)
    const [cleric, setCleric] = useState(false)
    const [druid, setDruid] = useState(false)
    const [fighter, setFighter] = useState(false)
    const [monk, setMonk] = useState(false)
    const [paladin, setPaladin] = useState(false)
    const [ranger, setRanger] = useState(false)
    const [rogue, setRogue] = useState(false)
    const [sorcerer, setSorcerer] = useState(false)
    const [warlock, setWarlock] = useState(false)
    const [wizard, setWizard] = useState(false)

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
        setBarbarian(true)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchBard(){
        setBarbarian(false)
        setBard(true)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchCleric(){
        setBarbarian(false)
        setBard(false)
        setCleric(true)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchDruid(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(true)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchFighter(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(true)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchMonk(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(true)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchPaladin(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(true)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchRanger(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(true)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchRogue(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(true)
        setSorcerer(false)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchSorcerer(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(true)
        setWarlock(false)
        setWizard(false)
        changeComponents1()
    }

    function switchWarlock(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(true)
        setWizard(false)
        changeComponents1()
    }

    function switchWizard(){
        setBarbarian(false)
        setBard(false)
        setCleric(false)
        setDruid(false)
        setFighter(false)
        setMonk(false)
        setPaladin(false)
        setRanger(false)
        setRogue(false)
        setSorcerer(false)
        setWarlock(false)
        setWizard(true)
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
                        
                    character && <Class id={character._id} changeComponents2={changeComponents2} changeComponentsBack2={changeComponentsBack2}/>

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