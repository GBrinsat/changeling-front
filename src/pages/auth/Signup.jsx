
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar";

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

    axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
        .then(() => {
            navigate('/login')
        })
        .catch(err => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription);
        })
  };

  
  return (
    <div className="LoginPage">

    <Navbar className="navbar"/>

    <div className="topbox"></div>
    <div className="d-flex flex-column align-items-center">
    <h1>Sign Up</h1>

    <form className="" onSubmit={handleSignupSubmit}>

      <div className="col-9">
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleName}
        placeholder="Username"
      />
      </div>

      <div className="col-9">
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePassword}
        placeholder="******"
      />
      </div>

      <button className="col-9 button login-button" type="submit">Sign up</button>
    </form>
    { errorMessage && <p className="error-message">{errorMessage}</p> }

    <p>Are you new here?</p>

    <Link className="link" to={"/login"}>Login</Link>
    </div>
  </div>


    /* <div className="SignupPage">

      <Navbar />

      <div className="topbox"></div>
      <div className="signup-container">
      <h1>Sign Up</h1>

      <form className="signup-form" onSubmit={handleSignupSubmit}>
    
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Username"
        />

        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="******"
        />
      
        <button className="button" type="submit">Sign Up</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
      </div>
    </div> */
  )
}

export default SignupPage;
