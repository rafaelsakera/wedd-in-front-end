import React from "react";
import { connect } from "react-redux";
import { SummeryRow } from "../../Functions/SumUpFunc";
import { mapStateToProps } from "../../State/SumUpTableState";

function SumUpTable(props) {
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

        <tbody id="tbodyTotalTable">{SummeryRow(props)}</tbody>
      </table>
    </div>
  );
}

export default connect(mapStateToProps)(SumUpTable);
