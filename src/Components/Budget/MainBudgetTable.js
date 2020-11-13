import React, { Component } from "react";
import { Trash, Brush } from "react-bootstrap-icons";
import "./Budjet.css";

class MainbudjetTable extends Component {
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
            <Trash
              width="2em"
              height="2em"
              onClick={() => {
                this.props.deleteFromState(stateObject.id);
              }}
            />
            <Brush
              width="2em"
              height="2em"
              onClick={() => {
                this.props.openEditForm(stateObject.id);
              }}
            />
          </td>
          <td>{"₪" + remainder}</td>
          <td>{"₪" + stateObject.payed}</td>
          <td>{"₪" + fullPrice}</td>
          <td>{"₪" + stateObject.unitPrice}</td>
          <td>{stateObject.amount}</td>
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
      </div>
    );
  }
}

export default MainbudjetTable;
