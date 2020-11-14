import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
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
          <Link className="Photos_section" to="#">
            <h1 className="display-4">Photos</h1>
          </Link>
        </div>

        <div className="jumbotron" id="Seating">
          <Link className="Seating_section" to="/guest-list">
            <h1 className="display-4">Guest list</h1>
          </Link>
        </div>

        <div className="jumbotron" id="Notes">
          <Link className="Notes_section" to="#">
            <h1 className="display-4">Notes</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
