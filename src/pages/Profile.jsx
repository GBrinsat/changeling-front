import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

import axios from "axios"

//Components
import Navbar from "../components/Navbar"
import CharacterCard from "../components/CharacterCard"

function Profile() {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState(null)

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


    const navigate = useNavigate();

    function handleClick() {

        const storedToken = localStorage.getItem("authToken")
        const body = {user: user._id}

        axios.post(`${import.meta.env.VITE_API_URL}/character/create`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                console.log(response)
                navigate("/characterCreation")
            })
    }

    return(
        <>
            <Navbar />

            <div className="character-topbox"></div>

            {userData && userData.character.map(singleCharacter => {
                {console.log(userData)}
                return(
                    <>
                    <CharacterCard key={singleCharacter._id} id={singleCharacter._id} getUser={getUser} userId={user._id}/>
                    </>
                )
                
            })}

            {userData &&
            <button className="button character-button" onClick={handleClick}>{userData.character.length === 0 ? `Create your first character`: `Create new character`}</button>
            }
        </>
    )
}

export default Profile