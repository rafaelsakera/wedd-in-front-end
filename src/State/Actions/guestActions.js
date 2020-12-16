export const addCards = (data) => {
  return {
    type: "ADD_CARDS",
    data: data,
  };
};

export const modalTrue = () => {
  return {
    type: "MODAL_TRUE",
  };
};

export const createNewCardModalTrue = () => {
  return {
    type: "CREATE_NEW_CARD_MODAL_TRUE",
  };
};

export const modalFalse = () => {
  return {
    type: "MODAL_FALSE",
  };
};

export const modelIdAndName = (id, title) => {
  return {
    type: "MODEL_ID_AND_NAME",
    id: id,
    title: title,
  };
};

export const GuestListRows = (data) => {
  return {
    type: "GUEST_LIST_ROWS",
    data: data,
  };
};

export const NewGuest = (data) => {
  return {
    type: "NEW_GUEST",
    data: data,
  };
};

export const createCardModalFalse = () => {
  return {
    type: "CREATE_CARD_MODAL_FALSE",
  };
};

export const spinnerOf = () => {
  return {
    type: "OFF_SPINNER",
  };
};

export const updateOverallGuests = (guestNum) => {
  return {
    type: "UPDATE_OVERALL_GUESTS",
    guestNum: guestNum,
  };
};
