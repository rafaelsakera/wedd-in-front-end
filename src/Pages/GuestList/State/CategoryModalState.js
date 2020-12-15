import { NewGuest, GuestListRows } from "../../../State/Actions/guestActions";

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
  };
};
