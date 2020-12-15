import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./DeleteModal.css";

function DeleteModal({ show, setShow, deleteFunction, funcArgs }) {
  return (
    <Modal className="delete-modal" show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title className="delete-modal-title">מחיקה</Modal.Title>
      </Modal.Header>
      <Modal.Body className="delete-modal-body">?האם אתה בטוח שברצונך למחוק</Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => {
            setShow(false);
            deleteFunction(...funcArgs);
          }}
        >
          מחק
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setShow(false);
          }}
        >
          ביטול
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
