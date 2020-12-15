export const addTableRow = (data) => {
  return {
    type: "ADD_TABLE_ROW",
    data: data,
  };
};

export const getTableRows = (data) => {
  return {
    type: "GET_TABLE_ROWS",
    data: data,
  };
};

export const deleteTableRow = (id) => {
  return {
    type: "DELETE_TABLE_ROWS",
    id: id,
  };
};

export const changeBudgetData = (data) => {
  return {
    type: "CHANGE_BUDGET_DATA",
    data: data,
  };
};

export const openEditForm = (id) => {
  return {
    type: "OPEN_EDIT_FORM",
    id: id,
  };
};

export const closeEditForm = () => {
  return {
    type: "CLOSE_EDIT_FORM",
  };
};
