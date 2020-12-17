import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

function NewGuestForm({ validated, submitHandler, changeHandler }) {
  return (
    <Form
      className="needs-validation"
      validated={validated}
      onSubmit={submitHandler}
    >
      <Row>
        <Col>
          <Form.Control
            required
            autoComplete="off"
            className="text-right"
            placeholder="כמות"
            type="number"
            name="amount"
            onChange={changeHandler}
          />
        </Col>
        <Col>
          <Form.Control
            required
            autoComplete="off"
            className="text-right"
            placeholder="שם"
            name="guestName"
            onChange={changeHandler}
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

export default NewGuestForm;
