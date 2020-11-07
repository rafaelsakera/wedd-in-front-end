import React from "react";
import { Button } from "react-bootstrap";

class AddFormsBody extends React.Component {
  state = {
    category: null,
    amount: null,
    unitPrice: null,
    payed: 0,
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (
      this.state.category !== null &&
      this.state.amount !== null &&
      this.state.unitPrice !== null
    ) {
      this.props.addToState(this.state);
      this.handelClose();
    }
  };

  handelClose = () => {
    this.setState({
      category: null,
      amount: null,
      unitPrice: null,
      payed: 0,
    });
    this.props.handelClose();
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation rightTextAlign"
          onSubmit={this.submitHandler}
          noValidate
        >
          <div className="form-group">
            <label htmlFor="addFormCategory" className="grey-text">
              קטגוריה
            </label>
            <input
              type="text"
              name="category"
              className="form-control rightTextAlign"
              id="addFormCategory"
              placeholder="הכנס קטגוריה חדשה"
              onChange={this.changeHandler}
              required
            />
            <div className="valid-feedback">ניראה טוב!</div>
          </div>
          <div className="form-group">
            <label htmlFor="addFormAmount">כמות</label>
            <input
              type="number"
              name="amount"
              className="form-control rightTextAlign"
              id="addFormAmount"
              placeholder="הכנס כמות"
              onChange={this.changeHandler}
              required
            />
            <div className="valid-feedback">ניראה טוב!</div>
          </div>
          <div className="form-group">
            <label htmlFor="addFormUnitPrice">מחיר יחידה</label>
            <input
              type="number"
              name="unitPrice"
              className="form-control rightTextAlign"
              id="addFormUnitPrice"
              placeholder="הכנס מחיר ליחידה"
              onChange={this.changeHandler}
              required
            />
            <div className="valid-feedback">ניראה טוב!</div>
          </div>
          <div className="form-group">
            <label htmlFor="addFormPayed">שולם</label>
            <input
              type="number"
              name="payed"
              className="form-control rightTextAlign"
              id="addFormPayed"
              placeholder="הכנס מחיר ששולם מראש"
              onChange={this.changeHandler}
              defaultValue={this.state.payed}
            />
          </div>
          <Button id="cancelBtn" variant="secondary" onClick={this.handelClose}>
            בטל
          </Button>
          <Button id="addFormAddBtn" variant="primary" type="submit">
            הוסף
          </Button>
        </form>
      </div>
    );
  }
}

export default AddFormsBody;
