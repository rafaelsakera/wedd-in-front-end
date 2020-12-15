import {
  addCards,
  modalFalse,
  createNewCardModalTrue,
  createCardModalFalse,
  spinnerOf,
} from "../../../State/Actions/guestActions";

export const mapStateToProps = (state) => {
  return {
    cardData: state.cardData,
    modal: state.modal,
    categoryId: state.categoryId,
    categoryName: state.categoryName,
    showSpinner: state.showSpinner,
  };
};

export const mapDispathToProps = (dispatch) => {
  return {
    addCards: (data) => {
      dispatch(addCards(data));
    },
    modalFalse: () => {
      dispatch(modalFalse());
    },
    createNewCardModalTrue: () => {
      dispatch(createNewCardModalTrue());
    },
    createCardModalFalse: () => {
      dispatch(createCardModalFalse());
    },
    spinnerOf: () => {
      dispatch(spinnerOf());
    },
  };
};
