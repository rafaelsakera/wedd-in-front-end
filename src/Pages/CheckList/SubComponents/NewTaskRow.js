import React from "react";
import Dot from "../png/Dot.png";
import { Form, Button } from "react-bootstrap";

export const newteskRow = (setTask, submitHundler, props) => {
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
              props.setNewTask(false);
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
