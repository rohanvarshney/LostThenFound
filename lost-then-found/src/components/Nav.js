import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Popup from "./Popup";
  
  const Nav = () => {

    //const [itemState, setState] = React.useState('Lost');

    let state = 'Lost';
    /*const setState = (d) => {
      //state = d;
      console.log("LINK: " + d.props.match.url);
    }*/





    return (
          <div class="nav">
             
              <NavLink className="link" to ="/Lost"><button className="navButton" onClick={console.log("lost")}>Lost Items</button></NavLink>
              <NavLink className="link" to ="/Found"><button className="navButton" onClick={console.log("found")}>Found Items</button></NavLink>
              <NavLink className="link" to ="/Matches"><button className="navButton">Matches</button></NavLink>
              <NavLink className="link" to ="/">Home</NavLink>

              
             
          </div>
    );
  };

export default Nav;