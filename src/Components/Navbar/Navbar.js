import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const AppNavbar = () => {
  return (
    <div id="navigation-bar">
      <Navbar bg="light" expand="lg">
        <Link className="navbar-brand" to="/">
          <img
            src={require("./icon.png")}
            width="50"
            height="30"
            alt=""
            loading="lazy"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/budget">
                Budget
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/guest-list">
                Guest list
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/check-list">
                Check List
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Photos
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/login"
                onClick={() => fetch("api/logout")}
              >
                Logout
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
