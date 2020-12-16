import { NewGuest, GuestListRows, updateOverallGuests } from "../../../State/Actions/guestActions";

export const mapStateToProps = (state) => {
  return {};
};

export const mapDispathToProps = (dispatch) => {
  return {
    NewGuest: (data) => {
      dispatch(NewGuest(data));
    },
    GuestListRows: (data) => {
      dispatch(GuestListRows(data));
    },
    updateOverallGuests: (guestNum) => {
      dispatch(updateOverallGuests(guestNum));
    },
  };
};
