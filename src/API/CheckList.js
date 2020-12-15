export const ApiDeleteTask = async (taskId) => {
  const res = await fetch("/api/delete-task", {
    method: "POST",
    body: JSON.stringify({
      taskId: taskId,
    }),
  });
  return await res.json();
};

export const ApiGetAllTasks = async () => {
  const res = await fetch("/api/get-all-tasks", {
    method: "GET",
  });

  return await res.json();
};

export const ApiAddNewTask = async (Task) => {
  const res = await fetch("/api/add-new-task", {
    method: "POST",
    body: JSON.stringify({
      task: Task,
    }),
  });
  return await res.json();
};
