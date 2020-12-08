import React, { useState } from "react";
import { connect } from "react-redux";
import { newteskRow } from "./NewTaskRow";
import { feathNewTask } from "./SubmitNewTask";
import { addNewTask } from "../../../State/Actions/checkListActions";

function NewTask(props) {
  const [Task, setTask] = useState(null);

  const submitHundler = (e) => {
    e.preventDefault();
    feathNewTask(Task, props.addNewTask);
    props.setNewTask(false);
    setTask(null);
  };

  return (
    <div className="new-task-row">
      {props.show ? newteskRow(setTask, submitHundler, props) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rows: state.rows,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    addNewTask: (id ,task) => {
      dispatch(addNewTask(id, task));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(NewTask);
