import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { postBudgetDataPOST } from "../../../Utils/ApiRequest";
import { addTableRow } from "../../../State/Actions/badgetActions";
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

  addToState = (row) => {
    let maxId = 0;
    this.props.tableRows.forEach((row) => {
      if (row.id > maxId) {
        maxId = row.id;
      }
    });
    row.id = maxId + 1;

    postBudgetDataPOST(row)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.props.addTableRow(row);
        } else {
          alert("server err");
        }
      })
      .catch(() => alert("server err"));
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
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title className="center-budget-modal">
              הוסף קטגוריה
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form_container" id="addForm">
              <AddFormsBody
                handelClose={this.handleClose}
                addToState={this.addToState}
              />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableRows: state.tableRows,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addTableRow: (data) => {
      dispatch(addTableRow(data));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(AddForm);
