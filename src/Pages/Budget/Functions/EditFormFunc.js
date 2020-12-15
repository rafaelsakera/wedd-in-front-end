import { ApieditBudgetData } from "../../../API/Budget";

export const resetEditState = (setState) => {
  setState({
    userEditVals: {},
    rowDetails: {
      id: null,
      category: null,
      amount: null,
      unitPrice: null,
      payed: null,
    },
  });
};

export const onSubmit = (props, state) => {
  if (Object.entries(state.userEditVals).length !== 0) {
    ApieditBudgetData(props.editRowId, state.userEditVals)
      .then((res) => {
        if (res.state === "successes") {
          props.changeBudgetData(res.res);
        } else {
          alert("server error");
        }
      })
      .catch(() => alert("server err"));
  }
};

export const handleClose = (props, setState) => {
  props.closeEditForm();
  resetEditState(setState);
};
