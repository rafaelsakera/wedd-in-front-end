import React, { Component } from "react";
import { numberWithCommas } from "../../../Utils/StringUtils";
import { connect } from "react-redux";
import "../Budjet.css";

class SumUpTable extends Component {
  fromStateToHTMLRowsForSummery = () => {
    let finalRemainder = 0;
    let finalFullPay = 0;
    let finalPayed = 0;

    for (let index in this.props.tableRows) {
      let row = this.props.tableRows[index];
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
            {this.fromStateToHTMLRowsForSummery()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableRows: state.tableRows,
  };
};

export default connect(mapStateToProps)(SumUpTable);
