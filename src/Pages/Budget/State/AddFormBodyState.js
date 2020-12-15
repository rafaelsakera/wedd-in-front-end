import { addTableRow } from "../../../State/Actions/badgetActions";

export const mapStateToProps = (state) => {
  return {
    tableRows: state.tableRows,
  };
};

export const mapDispathToProps = (dispatch) => {
  return {
    addTableRow: (data) => {
      dispatch(addTableRow(data));
    },
  };
};
