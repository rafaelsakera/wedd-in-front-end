const initState = {
  cardData: [],
  modal: false,
  categoryId: -1,
  categoryName: "",
  guestListRows: [],
  newCardModal: false,
  showSpinner: true,
};

const guestListReduser = (state = initState, action) => {
  if (action.type === "ADD_CARDS") {
    let newRows = [...action.data, { title: "ADD_PLUSE_CARD", id: -1 }];
    return {
      ...state,
      cardData: newRows,
    };
  }

  if (action.type === "MODAL_TRUE") {
    return {
      ...state,
      modal: true,
    };
  }

  if (action.type === "MODAL_FALSE") {
    return {
      ...state,
      modal: false,
    };
  }

  if (action.type === "MODEL_ID_AND_NAME") {
    return {
      ...state,
      categoryId: action.id,
      categoryName: action.title,
    };
  }

  if (action.type === "GUEST_LIST_ROWS") {
    let newRows = [...action.data];
    return {
      ...state,
      guestListRows: newRows,
    };
  }

  if (action.type === "NEW_GUEST") {
    let newRows = [...state.guestListRows, ...action.data];
    return {
      ...state,
      guestListRows: newRows,
    };
  }

  if (action.type === "CREATE_CARD_MODAL_FALSE") {
    return {
      ...state,
      newCardModal: false,
    };
  }

  if (action.type === "CREATE_NEW_CARD_MODAL_TRUE") {
    return {
      ...state,
      newCardModal: true,
    };
  }

  if (action.type === "OFF_SPINNER") {
    return {
      ...state,
      showSpinner: false,
    };
  }

  return state;
};

export default guestListReduser;
