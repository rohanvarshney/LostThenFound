import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Logout extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  componentDidMount() {
    // If logged out and user navigates to Logout page, should redirect them to login
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

	render() {
		const auth = this.props.auth;
	  return (
	      <div style={{ height: "75vh" }} className="container valign-wrapper">
	        <div className="row">
	          <div className="col s12 center-align">
	            <h4>
	              <b>Hey there, </b>{auth.user.name}!
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

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);