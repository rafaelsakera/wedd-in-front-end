import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"
import AppNavbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Budjet from "./Components/Budget/Budget";
import Login from "./Components/Login/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/budget" component={Budjet} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
