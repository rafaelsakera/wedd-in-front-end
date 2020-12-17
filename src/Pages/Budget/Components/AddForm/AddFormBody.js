import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { addToState } from "../../Functions/AddFormBodyFunc";
import {mapStateToProps, mapDispathToProps} from "../../State/AddFormBodyState"

function AddFormsBody(props) {
  const [state, setState] = useState({
    category: null,
    amount: null,
    unitPrice: null,
    payed: 0,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (
      state.category !== null &&
      state.amount !== null &&
      state.unitPrice !== null
    ) {
      addToState(state, props);
      handelClose();
    }
  };

  const handelClose = () => {
    setState({
      category: null,
      amount: null,
      unitPrice: null,
      payed: 0,
    });
    props.handelClose();
  };

  const changeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        className="needs-validation rightTextAlign"
        onSubmit={submitHandler}
        noValidate
      >
        <div className="form-group">
          <label htmlFor="addFormCategory" className="grey-text">
            קטגוריה
          </label>
          <input
            type="text"
            autoComplete="off"
            name="category"
            className="form-control rightTextAlign"
            id="addFormCategory"
            placeholder="הכנס קטגוריה חדשה"
            onChange={changeHandler}
            required
          />
          <div className="valid-feedback">ניראה טוב!</div>
        </div>
        <div className="form-group">
          <label htmlFor="addFormAmount">כמות</label>
          <input
            type="number"
            autoComplete="off"
            name="amount"
            className="form-control rightTextAlign"
            id="addFormAmount"
            placeholder="הכנס כמות"
            onChange={changeHandler}
            required
          />
          <div className="valid-feedback">ניראה טוב!</div>
        </div>
        <div className="form-group">
          <label htmlFor="addFormUnitPrice">מחיר יחידה</label>
          <input
            type="number"
            autoComplete="off"
            name="unitPrice"
            className="form-control rightTextAlign"
            id="addFormUnitPrice"
            placeholder="הכנס מחיר ליחידה"
            onChange={changeHandler}
            required
          />
          <div className="valid-feedback">ניראה טוב!</div>
        </div>
        <div className="form-group">
          <label htmlFor="addFormPayed">שולם</label>
          <input
            type="number"
            name="payed"
            autoComplete="off"
            className="form-control rightTextAlign"
            id="addFormPayed"
            placeholder="הכנס מחיר ששולם מראש"
            onChange={changeHandler}
            defaultValue={state.payed}
          />
        </div>
        <Button id="cancelBtn" variant="secondary" onClick={handelClose}>
          בטל
        </Button>
        <Button id="addFormAddBtn" variant="primary" type="submit">
          הוסף
        </Button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(AddFormsBody);
