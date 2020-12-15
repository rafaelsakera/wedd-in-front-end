import { ApipostBudgetData } from "../../../API/Budget";

const findMaxId = (tableRows) => {
  let maxId = 0;
  tableRows.forEach((row) => {
    if (row.id > maxId) {
      maxId = row.id;
    }
  });
  const id = maxId + 1;
  return id;
};

export const addToState = (row, props) => {
  row.id = findMaxId(props.tableRows);

  ApipostBudgetData(row)
    .then((res) => {
      if (res.state === "successes") {
        props.addTableRow(row);
      } else {
        alert("server err");
      }
    })
    .catch(() => alert("server err"));
};
