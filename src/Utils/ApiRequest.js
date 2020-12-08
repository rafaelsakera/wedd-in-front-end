export const editBudgetDataPOST = (id, editData) => {
  return fetch("/api/edit-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id, data: editData }),
  });
};

export const getBudgetDataGET = () => {
  return fetch("/api/get-budget-data", {
    method: "GET",
  });
};

export const postBudgetDataPOST = (row) => {
  return fetch("/api/post-budget-data", {
    method: "POST",
    body: JSON.stringify(row),
  });
};

export const deleteBudgetDataPOST = (id) => {
  return fetch("/api/delete-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id }),
  });
};

export const getCardDataGET = () => {
  return fetch("/api/get-card-data", {
    method: "GET",
  });
};

export const getCategoryGuestGET = (categoryId) => {
  return fetch("/api/get-category-guest?id=" + categoryId, {
    method: "GET",
  });
};

export const deleteGuestPOST = (guestId) => {
  return fetch("/api/delete-guest", {
    method: "POST",
    body: JSON.stringify({
      guestId: guestId,
    }),
  });
};

export const addNewGuestPOST = (categoryId, guestName, amount) => {
  return fetch("/api/add-new-guest", {
    method: "POST",
    body: JSON.stringify({
      categoryId: categoryId,
      guestName: guestName,
      amount: amount,
    }),
  });
};

export const deleteCardPOST = (categoryId) => {
  return fetch("/api/delete-card", {
    method: "POST",
    body: JSON.stringify({
      categoryId: categoryId,
    }),
  });
};

export const addNewCardPOST = (cardName, cardDescription) => {
  return fetch("/api/add-new-card", {
    method: "POST",
    body: JSON.stringify({
      title: cardName,
      baseText: cardDescription,
    }),
  });
};

export const loginPOST = (data) => {
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const deleteTaskPOST = (taskId) => {
  return fetch("/api/delete-task", {
    method: "POST",
    body: JSON.stringify({
      taskId: taskId,
    }),
  });
};

export const getAllTasksGET = () => {
  return fetch("/api/get-all-tasks", {
    method: "GET",
  });
};
