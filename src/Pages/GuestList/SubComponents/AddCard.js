import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PluseLogo from "../img/plus.svg.png";

class AddCard extends Component {
  render() {
    return (
      <div className="card" key={-1}>
        <div className="card-body text-center pluse-card">
          <Button
            variant="light"
            onClick={() => {
              this.props.newCardModal();
            }}
          >
            <img className="pluseLogo" src={PluseLogo} alt="pluse"></img>
          </Button>
        </div>
      </div>
    );
  }
}

export default AddCard;
