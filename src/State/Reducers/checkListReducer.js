const initState = {
  rows: [],
};

const checkListReduser = (state = initState, action) => {
  if (action.type === "ADD_ROWS") {
    return {
      ...state,
      rows: action.data,
    };
  }
  if (action.type === "DELETE_TASK") {
    let newRows = state.rows.filter((row) => {
      return row.id !== action.taskId;
    });
    return {
      ...state,
      rows: newRows,
    };
  }
  if (action.type === "ADD_NEW_TASK") {
    let newRows = [...state.rows, { id: action.id, task: action.task }];
    return {
      ...state,
      rows: newRows,
    };
  }
  return state;
};

export default checkListReduser;
