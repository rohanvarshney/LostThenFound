import React from "react";
import {NavLink} from "react-router-dom";
  
  const Nav = () => {
    return (
          <div class="nav">
                <a href="/"> <img src="images/LF_logo.png" width="200" alt="FullLogo" /> </a>
                  <NavLink className="link" to ="/Lost"><button className="navButton">Lost Items</button></NavLink>
                  <NavLink className="link" to ="/Found"><button className="navButton">Found Items</button></NavLink>
                  <NavLink className="link" to ="/Matches"><button className="navButton">Matches</button></NavLink>
          </div>
    );
  };

export default Nav;