import React from "react";

function EditFormBody({ state, setState }) {
  
  const editFormChange = (e, state, setState) => {
    let obj = state.userEditVals;
    obj[e.target.id] = e.target.value;
    setState({ ...state, userEditVals: obj });
  };

  return (
    <div className="form_container rightTextAlign" id="editForm">
      <form className="edit_form">
        <div className="form-group">
          <label htmlFor="editFormCategory">קטגוריה</label>
          <input
            type="text"
            name="category"
            className="form-control rightTextAlign"
            id="editFormCategory"
            placeholder={state.rowDetails.category}
            onChange={(e) => editFormChange(e, state, setState)}
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
            onChange={(e) => editFormChange(e, state, setState)}
            placeholder={state.rowDetails.amount}
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
            onChange={(e) => editFormChange(e, state, setState)}
            placeholder={state.rowDetails.unitPrice}
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
            onChange={(e) => editFormChange(e, state, setState)}
            placeholder={state.rowDetails.payed}
          />
        </div>
      </form>
    </div>
  );
}

export default EditFormBody;
