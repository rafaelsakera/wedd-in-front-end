import { modelIdAndName, modalTrue } from "../../../State/Actions/guestActions";

export const mapStateToProps = (state) => {
  return {};
};

export const mapDispathToProps = (dispatch) => {
  return {
    modalTrue: (data) => {
      dispatch(modalTrue(data));
    },
    modelIdAndName: (id, name) => {
      dispatch(modelIdAndName(id, name));
    },
  };
};
