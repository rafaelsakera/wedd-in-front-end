import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { mapDispathToProps, mapStateToProps } from "../State/CardState";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header text-center">{props.cardData.title}</div>
      <div className="card-body">
        <p className="card-text main-text">{props.cardData.baseText}</p>
        <p className="card-text bold">
          מספר חברים:
          <br />
          {props.cardData.objectNumber}
        </p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <Button
            className="btn btn-dark cardButton"
            onClick={() => {
              props.modalTrue();
              props.modelIdAndName(props.cardData.id, props.cardData.title);
            }}
          >
            כנס
          </Button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(Card);
