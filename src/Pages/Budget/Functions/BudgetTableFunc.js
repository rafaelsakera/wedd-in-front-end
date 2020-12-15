import React from "react";
import { ApideleteBudgetData } from "../../../API/Budget";
import { numberWithCommas } from "../../../Utils/StringUtils";
import { trash, brush } from "../../../Utils/BootstrapComponents";

export const TableRows = (budjetRows, safeDeleteRow, openEditForm) => {
  let fullHtmlrows = [];
  let row;

  for (let index in budjetRows) {
    let stateObject = budjetRows[index];
    let fullPrice = (stateObject.amount * stateObject.unitPrice).toFixed(1);
    let remainder = (fullPrice - stateObject.payed).toFixed(1);

    row = (
      <tr key={index}>
        <td>
          {trash(safeDeleteRow, stateObject.id)}
          {brush(openEditForm, stateObject.id)}
        </td>
        <td>{"₪" + numberWithCommas(remainder)}</td>
        <td>{"₪" + numberWithCommas(stateObject.payed)}</td>
        <td>{"₪" + numberWithCommas(fullPrice)}</td>
        <td>{"₪" + numberWithCommas(stateObject.unitPrice)}</td>
        <td>{numberWithCommas(stateObject.amount)}</td>
        <td>{stateObject.category}</td>
        <td>{parseInt(index) + 1}</td>
      </tr>
    );

    fullHtmlrows.push(row);
  }

  return fullHtmlrows;
};

export const deleteRow = (deleteId, setDeleteId, deleteTableRow) => {
  ApideleteBudgetData(deleteId)
    .then((res) => {
      if (res.state === "successes") {
        deleteTableRow(deleteId);
      } else {
        alert("server err");
      }
    })
    .catch(() => alert("server err"))
    .finally(() => setDeleteId(null));
};
