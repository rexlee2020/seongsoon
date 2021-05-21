import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Donate from "./components/Donate"
import Volunteer from "./components/Volunteer"
import Story from "./components/Story"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="all-container">
          <Navbar />
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route exact path="/volunteer">
            <Volunteer />
          </Route>
          <Route exact path="/story">
            <Story />
          </Route>
          <Footer />
        </div>
    </Router>
  );
};


ReactDom.render(<App />, document.getElementById("root"));
