import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  mapStateToProps,
  mapDispathToProps,
} from "../../State/BudgetTableState";
import { ApigetBudgetData } from "../../../../API/Budget";
import { spinner } from "../../../../Utils/BootstrapComponents";
import { TableRows, deleteRow } from "../../Functions/BudgetTableFunc";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

function BudjetTable(props) {
  const [showSpinner, setShowSpinner] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    apireq();
    const interval = setInterval(() => {
      apireq();
    }, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const apireq = async () => {
    try {
      const apiRes = await ApigetBudgetData();
      await props.getTableRows(apiRes.tableRows);
      setShowSpinner(false);
    } catch (err) {
      setShowSpinner(false);
      alert("server err");
    }
  };

  const safeDeleteRow = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  return (
    <div className="table-responsive">
      <DeleteModal
        show={deleteModal}
        setShow={setDeleteModal}
        deleteFunction={deleteRow}
        funcArgs={[deleteId, setDeleteId, props.deleteTableRow]}
      />
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
          {TableRows(props.tableRows, safeDeleteRow, props.openEditForm)}
        </tbody>
      </table>
      {spinner(showSpinner)}
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(BudjetTable);
