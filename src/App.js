import { createStore } from "redux";
import { Provider } from "react-redux";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import budgetReduser from "./State/Reducers/budgetReducers";
import guestListReduser from "./State/Reducers/guestListReducers";
import checkListReduser from "./State/Reducers/checkListReducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import GuestList from "./Pages/GuestList/GuestList";
import CheckList from "./Pages/CheckList/CheckList";
import AppNavbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Budjet from "./Pages/Budget/Budget";
import Login from "./Pages/Login/Login";

const geustListStore = createStore(guestListReduser);
const budgetStore = createStore(budgetReduser);
const checkListStore = createStore(checkListReduser);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={HomePage} />

          <Provider store={budgetStore}>
            <PrivateRoute exact path="/budget" component={Budjet} />
          </Provider>

          <Provider store={geustListStore}>
            <PrivateRoute exact path="/guest-list" component={GuestList} />
          </Provider>

          <Provider store={checkListStore}>
            <PrivateRoute exact path="/check-list" component={CheckList} />
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
