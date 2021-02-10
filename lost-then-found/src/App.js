import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Lost from "./components/Lost";
import Found from "./components/Found";
import Matches from "./components/Matches";
import Nav from "./components/Nav";

function App() {
    return (
      <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/Lost" component={Lost}/>
            <Route path="/Found" component={Found}/>
            <Route path="/Matches" component={Matches}/>
            <Route path="/" component={Home}/>
          </Switch>
      </div>

    </Router>
  );
}

export default App;
