import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Home from "./components/Home";
import Lost from "./components/Lost";
import Found from "./components/Found";
import Matches from "./components/Matches";
import Nav from "./components/Nav";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import {NavLink} from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {

  let [itemData, setItemData] = useState([[],[]]);
  let fetchAllItemData = () => {
    return fetch("/api/posts")
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
            console.log("RESPONSE IS NOT OKAYAPP");
          }
      })
      // .then(jsonRes => setPosts(jsonRes))
      // .then(data => console.log(data)) // use this command to print items to browser console on intial pageload
      .catch(error => console.error(error));
  }

  // calling useEffect with an anonymous function as arg1
  // and '[]' as arg2 makes useEffect only be called on initial load
  useEffect(() => {
    fetchAllItemData()
    .then(allPosts => {
        setItemData(allPosts);
    })}, []);

  //the login part doesn't work and I'm not sure why

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
            <div class="tabs">
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route path="/Lost" render={() => <Lost
                  itemData={itemData}
                  setData={setItemData}/> }
                  exact
                  />
                  <Route path="/Found" render={() => <Found
                  itemData={itemData}
                  setData={setItemData}/> }
                  exact
                  />
                  <PrivateRoute exact path="/Matches" component={Matches}/>
                  <Route path="/" component={Home}/>
                </Switch>
            </div>
            <div class="footer">
              <p>About | Community Guidelines | Help </p>
            </div>
        </div>
      </Router>
    </Provider>
  );

}

export default App;
