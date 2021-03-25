import React from "react";
import {NavLink, Link} from "react-router-dom";
  
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
          <div class="footer">
            <span class="footerLink">
              <NavLink className="link" to="/About"><span class="footerLink">About</span></NavLink>
              <span>|</span>
              <NavLink className="link" to="/Community-Guidelines"><span class="footerLink">Community Guidelines</span></NavLink>
              <span>|</span>
              <NavLink className="link" to="/Contact"><span class="footerLink">Contact Us</span></NavLink>
            </span>
          </div>
          </span>
    );
  };
export default Nav;

