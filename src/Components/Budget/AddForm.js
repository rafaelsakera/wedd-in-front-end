import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

import AddFormsBody from "./AddFormBody";

class AddForm extends Component {
  state = {
    show: false,
    userNewVals: {},
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  render() {
    return (
      <div className="addFormContainer">
        <Button
          id="add_btn"
          variant="btn btn-light"
          onClick={() => {
            this.handleShow();
          }}
        >
          הוסף
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleClose();
          }}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>הוסף קטגוריה</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form_container" id="addForm">
              <AddFormsBody
                handelClose={this.handleClose}
                addToState={this.props.addToState}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddForm;
