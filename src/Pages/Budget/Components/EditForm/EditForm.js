import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import EditFormBody from "./EditFormBody";
import { ApigetSpecificBudgetData } from "../../../../API/Budget";
import { onSubmit, handleClose } from "../../Functions/EditFormFunc";
import { mapDispathToProps, mapStateToProps } from "../../State/EditFormState";

function EditForm(props) {
  const [state, setState] = useState({
    userEditVals: {},
    rowDetails: {
      id: null,
      category: null,
      amount: null,
      unitPrice: null,
      payed: null,
    },
  });

  useEffect(() => {
    if (props.openEditForm === true) {
      ApigetSpecificBudgetData(props.editRowId).then((res) =>
        setState({ ...state, rowDetails: res.res })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.openEditForm]);

  return (
    <div className="editForm">
      <Modal
        show={props.openEditForm}
        onHide={() => {
          handleClose(props, setState);
        }}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="center-budget-modal">
            ערוך קטגוריה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFormBody state={state} setState={setState} />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose(props, setState);
            }}
          >
            בטל
          </Button>

          <Button
            variant="primary"
            id="editFormEditBtn"
            onClick={() => {
              onSubmit(props, state);
              handleClose(props, setState);
            }}
          >
            ערוך
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(EditForm);
