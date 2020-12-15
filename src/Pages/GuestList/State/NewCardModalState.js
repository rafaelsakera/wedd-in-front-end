import { createCardModalFalse } from "../../../State/Actions/guestActions";

export const mapStateToProps = (state) => {
  return {
    newCardModal: state.newCardModal,
  };
};

export const mapDispathToProps = (dispatch) => {
  return {
    createCardModalFalse: () => {
      dispatch(createCardModalFalse());
    },
  };
};
