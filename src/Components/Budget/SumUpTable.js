import React, { Component } from "react";
import "./Budjet.css";

class SumUpTable extends Component {
  fromStateToHTMLRowsForSummery = (tableRows) => {
    let finalFullPay = 0;
    let finalPayed = 0;
    let finalRemainder = 0;

    for (let index in tableRows) {
      let row = tableRows[index];
      finalFullPay += parseFloat(row.amount) * parseFloat(row.unitPrice);
      finalPayed +=  parseFloat(row.payed);
      finalRemainder += parseFloat(row.amount) * parseFloat(row.unitPrice) - parseFloat(row.payed);
    }

    return (
      <tr>
        <td>{finalRemainder.toFixed(1)}</td>
        <td>{finalPayed}</td>
        <td>{finalFullPay}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table text-right" id="total_table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">שארית תשלום</th>
              <th scope="col">שולם סה"כ</th>
              <th scope="col">עלות סה"כ</th>
              <th scope="col">#</th>
            </tr>
          </thead>

          <tbody id="tbodyTotalTable">
            {this.fromStateToHTMLRowsForSummery(this.props.tableRows)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SumUpTable;
