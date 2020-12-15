import React, { useState } from "react";
import Dot from "../img/Dot.png";
import { Form, Button } from "react-bootstrap";
import { ApiAddNewTask } from "../../../API/CheckList";

function NewTask({ show, setNewTask, addNewTask }) {
  const [Task, setTask] = useState(null);

  const feathNewTask = (Task, addNewTask) => {
    ApiAddNewTask(Task)
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

  const newteskRow = (setTask, submitHundler, setNewTask) => {
    return (
      <div className="check-list-row new-task-row" key="add-task-row">
        <div className="check-list-row-dot">
          <img src={Dot} width="7" height="7" alt="dot.." />
        </div>
        <Form>
          <div className="check-list-add-row-contect">
            <Form.Control
              onSubmit={submitHundler}
              className="text-right new-task-input"
              placeholder="משימה חדשה"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </div>
          <div className="check-list-add-row-buttons">
            <Button
              className="new-task-buttons"
              variant="outline-dark"
              onClick={() => {
                setNewTask(false);
                setTask(null);
              }}
            >
              בטל
            </Button>
            <Button
              className="new-task-buttons"
              variant="outline-dark"
              type="submit"
              onClick={submitHundler}
            >
              שמור
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  const submitHundler = (e) => {
    e.preventDefault();
    feathNewTask(Task, addNewTask);
    setNewTask(false);
    setTask(null);
  };

  return (
    <div className="new-task-row">
      {show ? newteskRow(setTask, submitHundler, setNewTask) : null}
    </div>
  );
}

export default NewTask;
