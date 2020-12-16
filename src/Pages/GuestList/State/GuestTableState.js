import {
  GuestListRows,
  updateOverallGuests,
} from "../../../State/Actions/guestActions";

export const mapStateToProps = (state) => {
  return {
    tableRows: state.guestListRows,
  };
};

export const mapDispathToProps = (dispatch) => {
  return {
    GuestListRows: (data) => {
      dispatch(GuestListRows(data));
    },
    updateOverallGuests: (guestNum) => {
      dispatch(updateOverallGuests(guestNum));
    },
  };
};
