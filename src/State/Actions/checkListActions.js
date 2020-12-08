export const getData = (data) => {
  return {
    type: "ADD_ROWS",
    data: data,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: "DELETE_TASK",
    taskId: taskId,
  };
};

export const addNewTask = (id, task) => {
  return {
    type: "ADD_NEW_TASK",
    id: id,
    task: task,
  };
};
