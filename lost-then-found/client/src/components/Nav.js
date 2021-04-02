import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../actions/authActions";
import {NavLink} from "react-router-dom";
  
// add onClick={logoutUser()} to logout button

  const Nav = () => {
    const onLogoutClick = e => {
      e.preventDefault();
      logoutUser();
    };

    const auth = useSelector(state => state.auth);

    if (auth.isAuthenticated) {
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
                    <NavLink className="link" to ="/Logout"><button className="navButton">Logout</button></NavLink>
                  </span>
            </div>
            </span>
      );
    } else {
      return (
        <span>
            <div class="nav">
                  <a href="/"> <img id ="homeButton" src="images/LF_logo.png" width="200" alt="FullLogo" /> </a>
                  <span>
                    <NavLink className="link" to ="/Lost"><button className="navButton">Lost Items</button></NavLink>
                    <NavLink className="link" to ="/Found"><button className="navButton">Found Items</button></NavLink>
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
    }
  };

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);

