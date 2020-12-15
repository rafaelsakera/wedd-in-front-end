import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./CheckList.css";

import Dot from "./img/Dot.png";
import { Button } from "react-bootstrap";
import NewTask from "./Components/NewTask";
import { trash } from "../../Utils/BootstrapComponents";
import { NodeMinusFill, NodePlus } from "react-bootstrap-icons";
import DeleteModal from "../../Components/DeleteModal/DeleteModal";
import { ApiDeleteTask, ApiGetAllTasks } from "../../API/CheckList";
import { mapDispathToProps, mapStateToProps } from "./State/CheckListState";

function CheckList(props) {
  const [taskId, settaskId] = useState(null);
  const [newTask, setNewTask] = useState(false);
  const [showSafeModal, setShowSafeModal] = useState(false);

  useEffect(() => {
    const getRowData = () => {
      ApiGetAllTasks()
        .then((res) => {
          if (res.state === "successes") {
            props.getData(res.res.tableRows);
          }
        })
        .catch((res) => alert(res));
    };
    getRowData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteRow = (rowId) => {
    ApiDeleteTask(rowId)
      .then((res) => {
        if (res.state === "successes") {
          props.deleteTask(rowId);
        } else {
          alert("server err");
        }
      })
      .catch((err) => alert(err));
  };

  const safeDelete = (id) => {
    setShowSafeModal(true);
    settaskId(id);
  };

  const createRows = (rows) => {
    return rows.map((row) => {
      return (
        <div className="check-list-row" key={row.id}>
          <div className="check-list-row-dot">
            <img src={Dot} width="7" height="7" alt="dot.." />
          </div>
          <div className="check-list-row-contect">{row.task + " "}</div>
          <div className="check-list-row-delete">
            {trash(safeDelete, row.id)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="check-list">
      <DeleteModal
        show={showSafeModal}
        setShow={setShowSafeModal}
        deleteFunction={deleteRow}
        funcArgs={[taskId]}
      />
      <div className="check-list-contect">
        <div className="check-list-title text-white ">
          <h1>מטלות</h1>
        </div>
        <div className="check-list-body">
          {createRows(props.rows, props.deleteTask)}
          <NewTask
            show={newTask}
            setNewTask={setNewTask}
            addNewTask={props.addNewTask}
          />
        </div>
      </div>
      <div className="sticky-elemnt">
        <Button
          variant="success"
          size="lg"
          onClick={() => {
            if (newTask === true) {
              setNewTask(false);
            } else {
              setNewTask(true);
            }
          }}
        >
          {newTask ? <NodeMinusFill /> : <NodePlus />}
        </Button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(CheckList);
