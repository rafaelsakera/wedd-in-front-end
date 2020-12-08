import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createCardModalFalse } from "../../../State/Actions/guestActions";
import { addNewCardPOST, getCardDataGET } from "../../../Utils/ApiRequest";

class NewCardModal extends Component {
  state = {
    cardDescription: null,
    cardName: null,
  };

  resetState = () => {
    this.setState({
      cardDescription: null,
      cardName: null,
    });
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendCard = () => {
    addNewCardPOST(this.state.cardName, this.state.cardDescription)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.resetState();
        } else {
          alert("server error");
        }
      })
      .then(() => this.props.createCardModalFalse())
      .then(() => {
        getCardDataGET()
          .then((res) => res.json())
          .then((res) => {
            if (res.state === "successes") {
              this.props.addCards(res.res.tableRows);
            } else {
              alert("server error");
            }
          })
          .catch(() => alert("server error"));
      })
      .catch(() => alert("server error"));
  };

  render() {
    return (
      <Modal
        show={this.props.newCardModal}
        onHide={this.props.createCardModalFalse}
      >
        <Modal.Header className="center-modal-title">
          <Modal.Title className="categoryModalHeader center-modal-title">
            כרטסייה חדשה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Control
                required
                className="text-right"
                placeholder="תיאור קצר"
                name="cardDescription"
                onChange={this.changeHandler}
              />
            </Col>
            <Col>
              <Form.Control
                required
                className="text-right"
                placeholder="שם"
                name="cardName"
                onChange={this.changeHandler}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              this.props.modalFalse();
              this.resetState();
            }}
          >
            סגור
          </Button>
          <Button variant="primary" onClick={this.sendCard}>
            הוסף
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newCardModal: state.newCardModal,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    createCardModalFalse: () => {
      dispatch(createCardModalFalse());
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(NewCardModal);
