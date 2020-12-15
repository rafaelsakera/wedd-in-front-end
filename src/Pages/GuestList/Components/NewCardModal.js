import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

import { ApiAddNewCard, ApiGetCardData } from "../../../API/GuestList";
import { mapDispathToProps, mapStateToProps } from "../State/NewCardModalState";

function NewCardModal(props) {
  const [cardDescription, setCardDescription] = useState(null);
  const [cardName, setCardName] = useState(null);

  const resetState = () => {
    setCardDescription(null);
    setCardName(null);
  };

  const changeHandler = (event) => {
    if (event.target.name === "cardDescription") {
      setCardDescription(event.target.value);
    } else {
      setCardName(event.target.value);
    }
  };

  const sendCard = () => {
    ApiAddNewCard(cardName, cardDescription)
      .then((res) => {
        if (res.state === "successes") {
          resetState();
        } else {
          alert("server error");
        }
      })
      .then(() => props.createCardModalFalse())
      .then(() => {
        ApiGetCardData()
          .then((res) => {
            if (res.state === "successes") {
              props.addCards(res.res.tableRows);
            } else {
              alert("server error");
            }
          })
          .catch(() => alert("server error"));
      })
      .catch(() => alert("server error"));
  };

  return (
    <Modal show={props.newCardModal} onHide={props.createCardModalFalse}>
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
              onChange={changeHandler}
            />
          </Col>
          <Col>
            <Form.Control
              required
              className="text-right"
              placeholder="שם"
              name="cardName"
              onChange={changeHandler}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.modalFalse();
            resetState();
          }}
        >
          סגור
        </Button>
        <Button variant="primary" onClick={sendCard}>
          הוסף
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(NewCardModal);
