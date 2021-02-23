import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Popup from "./Popup";
  
  const Nav = () => {

    //const [itemState, setState] = React.useState('Lost');

    let state = 'Lost';
    const setState = (d) => {
      state = d;
    }

    // state management for New Post popup box
    const [visible, setVisible] = useState(false); // default set to hidden

    // handler for toggling state of new post button
    const togglePopup = () => {
      setVisible(!visible);
    };




    return (
          <div class="nav">
             
              <NavLink className="link" to ="/Lost"><button className="navButton" onClick={setState('Lost')}>Lost Items</button></NavLink>
              <NavLink className="link" to ="/Found"><button className="navButton" onClick={setState('Found')}>Found Items</button></NavLink>
              <NavLink className="link" to ="/Matches"><button className="navButton">Matches</button></NavLink>
              <NavLink className="link" to ="/">Home</NavLink>

              <span id="searchPost">
                <input type="text" placeholder="Search by keyword..." class="searchBar"></input>
                <button type="button" id="newPost" onClick={togglePopup}>New Post</button>
              </span>

              {visible && <Popup 
                itemState={state}
                handleClose={togglePopup}
              />}
              
             
          </div>
    );
  };

export default Nav;