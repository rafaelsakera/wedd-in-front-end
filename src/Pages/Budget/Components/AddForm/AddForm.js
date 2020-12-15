import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AddFormsBody from "./AddFormBody";

function AddForm() {
  const [show, setShow] = useState(false);

  return (
    <div className="addFormContainer">
      <Button
        id="add_btn"
        variant="btn btn-light"
        onClick={() => setShow(true)}
      >
        הוסף
      </Button>

      <Modal show={show} onHide={() => setShow(false)} keyboard={false}>
        <Modal.Header>
          <Modal.Title className="center-budget-modal">
            הוסף קטגוריה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form_container" id="addForm">
            <AddFormsBody handelClose={() => setShow(false)} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddForm;
