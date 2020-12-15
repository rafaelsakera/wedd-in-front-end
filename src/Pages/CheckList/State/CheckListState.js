import {
    getData,
    deleteTask,
    addNewTask,
  } from "../../../State/Actions/checkListActions";
  
  export const mapStateToProps = (state) => {
    return {
      rows: state.rows,
    };
  };
  
  export const mapDispathToProps = (dispatch) => {
    return {
      getData: (data) => {
        dispatch(getData(data));
      },
      deleteTask: (taskId) => {
        dispatch(deleteTask(taskId));
      },
      addNewTask: (id, task) => {
        dispatch(addNewTask(id, task));
      },
    };
  };
  