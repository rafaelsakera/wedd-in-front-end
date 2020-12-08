import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getData, deleteTask } from "../../State/Actions/checkListActions";
import { deleteTaskPOST, getAllTasksGET } from "../../Utils/ApiRequest";
import { NodeMinusFill, NodePlus } from "react-bootstrap-icons";
import { trash } from "../../Utils/BootstrapComponents";
import NewTask from "./SubComponents/NewTask";
import { Button } from "react-bootstrap";
import Dot from "./png/Dot.png";
import "./CheckList.css";

function CheckList(props) {
  const [newtask, setNewTask] = useState(false);

  useEffect(() => {
    const getRowData = () => {
      getAllTasksGET()
        .then((res) => res.json())
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
    deleteTaskPOST(rowId)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          props.deleteTask(rowId);
        } else {
          alert("server err");
        }
      })
      .catch((err) => alert(err));
  };

  const createRows = () => {
    return props.rows.map((row) => {
      return (
        <div className="check-list-row" key={row.id}>
          <div className="check-list-row-dot">
            <img src={Dot} width="7" height="7" alt="dot.." />
          </div>
          <div className="check-list-row-contect">{row.task + " "}</div>
          <div className="check-list-row-delete">
            {trash(deleteRow, row.id)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="check-list">
      <div className="check-list-contect">
        <div className="check-list-title text-white ">
          <h1>רשימת מטלות</h1>
        </div>
        <div className="check-list-body">
          {createRows()}
          <NewTask show={newtask} setNewTask={setNewTask} />
        </div>
      </div>
      <div className="sticky-elemnt">
        <Button
          variant="success"
          size="lg"
          onClick={() => {
            if (newtask === true) {
              setNewTask(false);
            } else {
              setNewTask(true);
            }
          }}
        >
          {newtask ? <NodeMinusFill /> : <NodePlus />}
        </Button>
      </div>
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
    getData: (data) => {
      dispatch(getData(data));
    },
    deleteTask: (taskId) => {
      dispatch(deleteTask(taskId));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CheckList);
