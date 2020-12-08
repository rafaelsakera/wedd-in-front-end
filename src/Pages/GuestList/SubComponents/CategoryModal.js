import React, { Component } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import GuestTable from "./GuestTable";
import { connect } from "react-redux";
import { NewGuest, GuestListRows } from "../../../State/Actions/guestActions";
import {
  addNewGuestPOST,
  getCategoryGuestGET,
  deleteCardPOST,
} from "../../../Utils/ApiRequest";

class CategoryModal extends Component {
  state = {
    showNewGuestForm: false,
    validated: false,
    setValidated: false,
    guestName: null,
    amount: null,
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.guestName !== null && this.state.amount !== null) {
      addNewGuestPOST(
        this.props.categoryId,
        this.state.guestName,
        this.state.amount
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.state === "fail") {
            alert("server error");
          } else {
            getCategoryGuestGET(this.props.categoryId)
              .then((res) => res.json())
              .then((res) => {
                this.props.GuestListRows(res.res.tableRows);
              })
              .catch(() => alert("server error"));
          }
        })
        .then(() => {
          this.setState({
            showNewGuestForm: false,
            name: null,
            amount: null,
          });
        })
        .then(() => {
          this.props.cardData();
        })
        .catch((e) => alert("server error"));
    }
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  newGuestForm = () => {
    if (this.state.showNewGuestForm === true) {
      return (
        <Form
          className="needs-validation"
          validated={this.state.validated}
          onSubmit={this.submitHandler}
        >
          <Row>
            <Col>
              <Form.Control
                required
                className="text-right"
                placeholder="כמות"
                type="number"
                name="amount"
                onChange={this.changeHandler}
              />
            </Col>
            <Col>
              <Form.Control
                required
                className="text-right"
                placeholder="שם"
                name="guestName"
                onChange={this.changeHandler}
              />
            </Col>
          </Row>
          <br />
          <Row className="justify-content-md-center">
            <Button
              type="submit"
              className="col-md-4 add-new-guest-btn"
              variant="primary"
            >
              שמור
            </Button>
          </Row>
        </Form>
      );
    }
  };

  deleteCard = (categoryId) => {
    deleteCardPOST(categoryId)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.props.cardData();
        } else {
          alert(res.res);
        }
      })
      .then(() => {
        this.props.modalFalse();
      })
      .catch(() => alert("server error"));
  };

  render() {
    return (
      <Modal
        show={this.props.modal}
        onHide={() => {
          this.props.modalFalse();
          this.setState({ showNewGuestForm: false });
        }}
        backdrop="static"
      >
        <Modal.Header className="center-modal-title">
          <Modal.Title className="categoryModalHeader center-modal-title">
            {this.props.categoryName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GuestTable
            categoryId={this.props.categoryId}
            cardData={this.props.cardData}
          />
          <div className="add-new-guest">{this.newGuestForm()}</div>
        </Modal.Body>
        <Modal.Footer style={{ display: "flex" }}>
          <Button
            style={{ marginRight: "auto" }}
            variant="danger"
            className="left-danger-button"
            onClick={() => this.deleteCard(this.props.categoryId)}
          >
            מחק כרטיס
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              this.setState({
                showNewGuestForm: false,
              });
              this.props.modalFalse();
            }}
          >
            סגור
          </Button>
          <Button
            variant="primary"
            onClick={() => this.setState({ showNewGuestForm: true })}
          >
            הוסף
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispathToProps = (dispatch) => {
  return {
    NewGuest: (data) => {
      dispatch(NewGuest(data));
    },
    GuestListRows: (data) => {
      dispatch(GuestListRows(data));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CategoryModal);
