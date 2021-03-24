/*
import React from 'react';

const Matches = () => {
    return (
        <>
        <h1>Matches PAGE</h1>
        </>

    );
}

export default Matches;
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Matches extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

	render() {
	    const { user } = this.props.auth;
	  return (
	      <div style={{ height: "75vh" }} className="container valign-wrapper">
	        <div className="row">
	          <div className="col s12 center-align">
	            <h4>
	              <b>Hey there,</b> {user.name.split(" ")[0]}.
	              <p className="flow-text grey-text text-darken-1">
	                You are now logged in!
	              </p>
	            </h4>
	            <button
	              style={{
	                width: "150px",
	                borderRadius: "3px",
	                letterSpacing: "1.5px",
	                marginTop: "1rem"
	              }}
	              onClick={this.onLogoutClick}
	              className="navButton"
	            >
	              Logout
	            </button>
	          </div>
	        </div>
	      </div>
	    );
	  }
	}

Matches.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Matches);