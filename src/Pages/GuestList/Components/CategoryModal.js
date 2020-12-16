import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import {
  mapStateToProps,
  mapDispathToProps,
} from "../State/CategoryModalState";
import {
  ApiAddNewGuest,
  ApiGetCategoryGuest,
  ApiDeleteCard,
  ApiGetOverAllGuests,
} from "../../../API/GuestList";
import GuestTable from "./GuestTable";
import NewGuestForm from "./NewGuestForm";

function CategoryModal(props) {
  const [state, setState] = useState({
    showNewGuestForm: false,
    setValidated: false,
    validated: false,
    guestName: null,
    amount: null,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.guestName !== null && state.amount !== null) {
      ApiAddNewGuest(props.categoryId, state.guestName, state.amount)
        .then((res) => {
          if (res.state === "fail") {
            alert("server error");
          } else {
            ApiGetCategoryGuest(props.categoryId)
              .then((res) => {
                props.GuestListRows(res.res.tableRows);
              })
              .then(() => {
                ApiGetOverAllGuests().then((res) => {
                  props.updateOverallGuests(res.res.overallGuests);
                });
              })
              .catch(() => alert("server error"));
          }
        })
        .then(() => {
          setState({
            ...state,
            showNewGuestForm: false,
            name: null,
            amount: null,
          });
        })
        .then(() => {
          props.cardData();
        })
        .catch((e) => alert("server error"));
    }
  };

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const newGuestForm = () => {
    if (state.showNewGuestForm === true) {
      return (
        <NewGuestForm
          validated={state.validated}
          submitHandler={submitHandler}
          changeHandler={changeHandler}
        />
      );
    }
  };

  const deleteCard = (categoryId) => {
    ApiDeleteCard(categoryId)
      .then((res) => {
        if (res.state === "successes") {
          props.cardData();
        } else {
          alert(res.res);
        }
      })
      .then(() => {
        props.modalFalse();
      })
      .then(() => {
        ApiGetOverAllGuests().then((res) => {
          props.updateOverallGuests(res.res.overallGuests);
        });
      })
      .catch(() => alert("server error"));
  };

  return (
    <Modal
      show={props.modal}
      onHide={() => {
        props.modalFalse();
        setState({ ...state, showNewGuestForm: false });
      }}
      backdrop="static"
    >
      <Modal.Header className="center-modal-title">
        <Modal.Title className="categoryModalHeader center-modal-title">
          {props.categoryName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GuestTable categoryId={props.categoryId} cardData={props.cardData} />
        <div className="add-new-guest">{newGuestForm()}</div>
      </Modal.Body>
      <Modal.Footer style={{ display: "flex" }}>
        <Button
          style={{ marginRight: "auto" }}
          variant="danger"
          className="left-danger-button"
          onClick={() => deleteCard(props.categoryId)}
        >
          מחק כרטיס
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setState({
              ...state,
              showNewGuestForm: false,
            });
            props.modalFalse();
          }}
        >
          סגור
        </Button>
        <Button
          variant="primary"
          onClick={() => setState({ ...state, showNewGuestForm: true })}
        >
          הוסף
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(CategoryModal);
