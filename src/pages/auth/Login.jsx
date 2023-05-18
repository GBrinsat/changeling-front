// src/pages/LoginPage.js

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

import Navbar from "../../components/Navbar";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();

  const {storeToken, authenticateUser} = useContext(AuthContext)

  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const requestBody= {name, password}

    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, requestBody, {headers: {"Content-Type": "application/json"}})
        .then(response => {
            storeToken(response.data.authToken)
            authenticateUser()
            navigate("/")
        })
        .catch((err) => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription);
        })    
  };

  return (
    <div className="LoginPage">

      <Navbar className="navbar"/>

      <div className="topbox"></div>
      <div className="d-flex flex-column align-items-center">
      <h1 className="login-header">Login</h1>

      <form className="" onSubmit={handleLoginSubmit}>

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

        <button className="col-9 button login-button loginlink" type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p className="login-text">Are you new here?</p>

      <Link className="link loginlink" to={"/signup"}>Sign Up</Link>
      </div>
    </div>
  )
}

export default LoginPage;
