
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar";

const API_URL = "https://changelingbackend.fly.dev"


function SignupPage(props) {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault()

    const requestBody = {name, password}
    console.log(requestBody)

    axios.post(`${API_URL}/auth/signup`, requestBody)
        .then(() => {
            navigate('/login')
        })
        .catch(err => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription);
        })
  };

  
  return (
    <div className="SignupPage">

      <Navbar />

      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
    
      <label>Username:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      
        <button type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}

export default SignupPage;
