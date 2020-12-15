import {
    deleteTableRow,
    getTableRows,
    openEditForm,
  } from "../../../State/Actions/badgetActions";
  
  export const mapStateToProps = (state) => {
    return {
      tableRows: state.tableRows,
    };
  };
  
  export const mapDispathToProps = (dispatch) => {
    return {
      deleteTableRow: (id) => {
        dispatch(deleteTableRow(id));
      },
      getTableRows: (data) => {
        dispatch(getTableRows(data));
      },
      openEditForm: (id) => {
        dispatch(openEditForm(id));
      },
    };
  };
  