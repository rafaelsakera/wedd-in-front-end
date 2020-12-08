import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "../Budjet.css";

class EditForm extends Component {
  state = {
    show: false,
    editCategory: {},
    userEditVals: {},
  };

  componentWillReceiveProps = (props) => {
    if (props.showForm !== this.state.show) {
      this.setState({ show: props.showForm });
    }

    if (props.editCategory !== this.state.editCategory) {
      this.setState({ editCategory: props.editCategory[0] });
    }
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
    this.props.resetEditState();
    this.setState({
      userEditVals: {},
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  getAmount = () => {
    if (this.state.editCategory !== undefined) {
      return this.state.editCategory.amount;
    }
  };

  getCategory = () => {
    if (this.state.editCategory !== undefined) {
      return this.state.editCategory.category;
    }
  };

  getUnitPrice = () => {
    if (this.state.editCategory !== undefined) {
      return this.state.editCategory.unitPrice;
    }
  };

  getPayed = () => {
    if (this.state.editCategory !== undefined) {
      return this.state.editCategory.payed;
    }
  };

  editFormChange = (e) => {
    let obj = this.state.userEditVals;
    obj[e.target.id] = e.target.value;
    this.setState({
      userEditVals: obj,
    });
  };

  onSubmit = () => {
    this.props.onEdit(this.state.userEditVals, this.state.editCategory.id);
  };

  render() {
    return (
      <div className="editForm">
        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleClose();
          }}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title className="center-budget-modal">
              ערוך קטגוריה
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form_container rightTextAlign" id="editForm">
              <form className="edit_form">
                <div className="form-group">
                  <label htmlFor="editFormCategory">קטגוריה</label>
                  <input
                    type="text"
                    name="category"
                    className="form-control rightTextAlign"
                    id="editFormCategory"
                    placeholder={this.getCategory()}
                    onChange={this.editFormChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="editFormAmount">כמות</label>
                  <input
                    type="number"
                    name="amount"
                    className="form-control rightTextAlign"
                    id="editFormAmount"
                    onChange={this.editFormChange}
                    placeholder={this.getAmount()}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="editFormUnitPrice">מחיר יחידה</label>
                  <input
                    type="number"
                    name="unit_price"
                    className="form-control rightTextAlign"
                    id="editFormUnitPrice"
                    onChange={this.editFormChange}
                    placeholder={this.getUnitPrice()}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="editFormPayed">שולם</label>
                  <input
                    type="number"
                    name="payed"
                    className="form-control rightTextAlign"
                    id="editFormPayed"
                    onChange={this.editFormChange}
                    placeholder={this.getPayed()}
                  />
                </div>
              </form>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleClose();
              }}
            >
              בטל
            </Button>

            <Button
              variant="primary"
              id="editFormEditBtn"
              onClick={() => {
                this.onSubmit();
                this.handleClose();
              }}
            >
              ערוך
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditForm;
