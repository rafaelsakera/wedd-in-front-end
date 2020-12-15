const initState = {
  tableRows: [],
  openEditForm: false,
  editRowId: null,
};

const budgetReduser = (state = initState, action) => {
  if (action.type === "ADD_TABLE_ROW") {
    let newRows = [...state.tableRows, action.data];
    return {
      ...state,
      tableRows: newRows,
    };
  }
  if (action.type === "GET_TABLE_ROWS") {
    let newRows = [...action.data];
    return {
      ...state,
      tableRows: newRows,
    };
  }
  if (action.type === "DELETE_TABLE_ROWS") {
    let newRows = state.tableRows.filter((row) => {
      return row.id !== action.id;
    });
    return {
      ...state,
      tableRows: newRows,
    };
  }
  if (action.type === "CHANGE_BUDGET_DATA") {
    let newRows = state.tableRows.map((row) => {
      if (row.id === action.data.id) {
        return action.data;
      } else {
        return row;
      }
    });
    return {
      ...state,
      tableRows: newRows,
    };
  }
  if (action.type === "OPEN_EDIT_FORM") {
    return {
      ...state,
      editRowId: action.id,
      openEditForm: true,
    };
  }
  if (action.type === "CLOSE_EDIT_FORM") {
    return {
      ...state,
      editRowId: null,
      openEditForm: false,
    };
  }
  return state;
};

export default budgetReduser;
