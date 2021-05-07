import React, { Component } from "react";
import Header from "../../headerNfooters/header/header";
import Footer from "../../headerNfooters/footer/footer";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "../Home/Home";
import Info from "../Info/Info";
import Achievement from "../Achievement/Achievement";
import Contact from "../Contact/Contact";
import "../Component.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  mainFunc() {
    return (
      <div>
        <Router>
          <Header style="width:100%;" />
          <div>
            <Route
              exact
              path="/home"
              render={() => {
                return (
                  <div>
                    <Home />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/info"
              render={() => {
                return (
                  <div>
                    <Info />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/achievement"
              render={() => {
                return (
                  <div>
                    <Achievement />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/contact"
              render={() => {
                return (
                  <div>
                    <Contact />
                  </div>
                );
              }}
            />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }

  render() {
    return <div>{this.mainFunc()}</div>;
  }
}

export default App;
