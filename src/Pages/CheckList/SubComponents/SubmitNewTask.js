export const feathNewTask = (Task, addNewTask) => {
  fetch("/api/add-new-task", {
    method: "POST",
    body: JSON.stringify({
      task: Task,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.state === "successes") {
        addNewTask(res.res.id, Task);
      } else {
        alert("server err");
      }
    })
    .catch((err) => {
      alert(err);
    });
};
