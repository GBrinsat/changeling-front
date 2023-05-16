// src/components/Navbar.js

import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);   // <== ADD

  
  //  Update the rendering logic to display different content 
  //  depending on whether the user is logged in or not
  return (
  
<nav className="navbar navbar-expand-lg navbar-main">
  <div className="container-fluid">
    <a className="navbar-brand navbar-logo" href="/">Changeling</a>
    <button className="navbar-toggler nav-border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      {<span className="navbar-toggler-icon"></span>}
      {/* <div className="nav-icon"></div> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        {isLoggedIn && (
          <>
           <button className="nav-link nav-button" onClick={logOutUser}>Logout</button>
           <Link to="/profile" className="link"> <button className="nav-link nav-button">Profile</button> </Link>
          </>
        )}
        {!isLoggedIn && (
           <>
            <Link to="/signup" className="link"> <button className="nav-link nav-button">Sign Up</button> </Link>
            <Link to="/login" className="link"> <button className="nav-link nav-button">Login</button> </Link>
          </>
        )}
      </div>
    </div>
  </div>
</nav>
    
  );
}

export default Navbar;
