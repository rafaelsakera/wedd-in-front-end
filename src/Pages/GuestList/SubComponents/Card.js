import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { modelIdAndName, modalTrue } from "../../../State/Actions/guestActions";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header text-center">
          {this.props.cardData.title}
        </div>
        <div className="card-body">
          <p className="card-text main-text">{this.props.cardData.baseText}</p>
          <p className="card-text bold">
            מספר חברים:
            <br />
            {this.props.cardData.objectNumber}
          </p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center">
            <Button
              className="btn btn-dark cardButton"
              onClick={() => {
                this.props.modalTrue();
                this.props.modelIdAndName(
                  this.props.cardData.id,
                  this.props.cardData.title
                );
              }}
            >
              צפה / ערוך
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispathToProps = (dispatch) => {
  return {
    modalTrue: (data) => {
      dispatch(modalTrue(data));
    },
    modelIdAndName: (id, name) => {
      dispatch(modelIdAndName(id, name));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Card);
