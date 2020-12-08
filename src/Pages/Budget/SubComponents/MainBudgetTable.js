import React, { Component } from "react";
import { spinner, trash, brush } from "../../../Utils/BootstrapComponents";
import { connect } from "react-redux";
import { deleteBudgetDataPOST } from "../../../Utils/ApiRequest";
import { deleteTableRow } from "../../../State/Actions/badgetActions";
import { numberWithCommas } from "../../../Utils/StringUtils";

class MainbudjetTable extends Component {
  deleteFromState = (id) => {
    deleteBudgetDataPOST(id)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.props.deleteTableRow(id);
        } else {
          alert("server err");
        }
      })
      .catch(() => alert("server err"));
  };

  fromStateToHTMLRows = (budjetRows) => {
    let fullHtmlrows = [];
    let row;

    for (let index in budjetRows) {
      let stateObject = budjetRows[index];
      let fullPrice = (stateObject.amount * stateObject.unitPrice).toFixed(1);
      let remainder = (fullPrice - stateObject.payed).toFixed(1);

      row = (
        <tr key={index}>
          <td>
            {trash(this.deleteFromState, stateObject.id)}
            {brush(this.props.openEditForm, stateObject.id)}
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

  render() {
    return (
      <div className="table-responsive">
        <table className="table text-right" id="budget_table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">מחק \ ערוך</th>
              <th scope="col">ייתרה</th>
              <th scope="col">שולם</th>
              <th scope="col">סה"כ מחיר</th>
              <th scope="col">מחיר ליחידה</th>
              <th scope="col">כמות</th>
              <th scope="col">קטגוריה</th>
              <th scope="col">#</th>
            </tr>
          </thead>

          <tbody id="tbodyBudgetTable">
            {this.fromStateToHTMLRows(this.props.budjetRows)}
          </tbody>
        </table>
        {spinner(this.props.showSpinner)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableRows: state.tableRows,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    deleteTableRow: (id) => {
      dispatch(deleteTableRow(id));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(MainbudjetTable);
