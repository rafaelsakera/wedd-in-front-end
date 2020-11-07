import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="jumbotron" id="title">
          <div className="title_display-4">
            <h1>Rafael & Raheli</h1>
            <h2>10.6.2021</h2>
          </div>
        </div>

        <div className="Budget_Photos_Seating_Notes">
          <div className="jumbotron" id="Budget">
            <Link className="Budget_section" to="/budget">
              <h1 className="display-4">Budget</h1>
            </Link>
          </div>

          <div className="jumbotron" id="Photos">
            <a className="Photos_section" href="#">
              <h1 className="display-4">Photos</h1>
            </a>
          </div>

          <div className="jumbotron" id="Seating">
            <a className="Seating_section" href="#">
              <h1 className="display-4">Guest list</h1>
            </a>
          </div>

          <div className="jumbotron" id="Notes">
            <a className="Notes_section" href="#">
              <h1 className="display-4">Notes</h1>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
