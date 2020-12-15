import React from "react";
import { numberWithCommas } from "../../../Utils/StringUtils";

export const SummeryRow = (props) => {
  let finalRemainder = 0;
  let finalFullPay = 0;
  let finalPayed = 0;

  for (let index in props.tableRows) {
    let row = props.tableRows[index];
    finalFullPay += parseFloat(row.amount) * parseFloat(row.unitPrice);
    finalPayed += parseFloat(row.payed);
    finalRemainder +=
      parseFloat(row.amount) * parseFloat(row.unitPrice) -
      parseFloat(row.payed);
  }

  return (
    <tr>
      <td>{numberWithCommas(finalRemainder.toFixed(1))}</td>
      <td>{numberWithCommas(finalPayed)}</td>
      <td>{numberWithCommas(finalFullPay)}</td>
    </tr>
  );
};
