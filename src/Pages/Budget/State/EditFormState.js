import {
    closeEditForm,
    changeBudgetData,
  } from "../../../State/Actions/badgetActions";
  
  export const mapStateToProps = (state) => {
    return {
      openEditForm: state.openEditForm,
      editRowId: state.editRowId,
    };
  };
  
  export const mapDispathToProps = (dispatch) => {
    return {
      closeEditForm: () => {
        dispatch(closeEditForm());
      },
      changeBudgetData: (data) => {
        dispatch(changeBudgetData(data));
      },
    };
  };
  