import React from "react";
import {NavLink} from "react-router-dom";
  
  const Nav = () => {
    return (
          <div class="nav">
              <div class="links">
              <NavLink className="link" to ="/Lost">Lost Items</NavLink>
              <NavLink className="link" to ="/Found">Found Items</NavLink>
              <NavLink className="link" to ="/Matches">Matches</NavLink>
              <NavLink className="link" to ="/">Home</NavLink>
              </div>
          </div>
    );
  };

export default Nav;