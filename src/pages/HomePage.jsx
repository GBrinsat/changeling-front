import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

function HomePage() {

    const { user } = useContext(AuthContext)

    const [userData, setUserData] = useState(null)

    function getUser() {

        if(user != null) {
            const userId = user._id

            const storedToken = localStorage.getItem("authToken")
        
            axios.get(`${import.meta.env.VITE_API_URL}/user/find/${userId}`,
            { headers: { Authorization: `Bearer ${storedToken}`}}
            )
                .then(response => {
                    setUserData(response.data.user)
                })
        }
        
    }

    useEffect(() => {
        getUser()
    },[])

    return(
        <>
        <header>
            <Navbar />
        </header>

            {user ? 
            
            <>
            <div className="character-topbox"></div>
            <div className="character-form">
            <h1>Welcome {user.name.slice(0,1).toUpperCase() + user.name.slice(1)}!</h1>
            <p className="character-creation-text-start">Here you can find your characters:</p>
            <Link className="link" to={"/profile"}>Characters</Link>
            </div>
            </>
            
            
            : 

            <>
            <div className="character-form">
                <div className="character-topbox"></div>
                <h1>Welcome Traveller!</h1>
                <p className="character-creation-text-start login-text">Join us and jump right into creating Dungeons & Dragons characters with our assisted creation tool. 
                    Create valiant heroes and riveting backstories in a couple of simple steps
                </p>

                <Link className="link loginlink" to={"/signup"}>Sign Up</Link>
                <p className="login-text">You already have an account?</p>
                <Link className="link loginlink" to={"/login"}>Login</Link>
                
            </div>
            </>
        
        }
           
            
        </>
    )
}

export default HomePage