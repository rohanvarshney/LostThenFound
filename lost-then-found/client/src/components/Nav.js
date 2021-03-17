import React from "react";
import {NavLink} from "react-router-dom";
  
  const Nav = () => {
    return (
      <span>
          <div class="nav">
                <a href="/"> <img id ="homeButton" src="images/LF_logo.png" width="200" alt="FullLogo" /> </a>
                <span>
                  <NavLink className="link" to ="/Lost"><button className="navButton">Lost Items</button></NavLink>
                  <NavLink className="link" to ="/Found"><button className="navButton">Found Items</button></NavLink>
                  <NavLink className="link" to ="/Matches"><button className="navButton">Matches</button></NavLink>
                </span>
                
          </div>
          <div class="login">
             <span>
                  <NavLink className="link" to ="/Login"><button className="navButton">Login</button></NavLink>
                  <NavLink className="link" to ="/Register"><button className="navButton">Register</button></NavLink>
                </span>
          </div>
          </span>
    );
  };
export default Nav;

