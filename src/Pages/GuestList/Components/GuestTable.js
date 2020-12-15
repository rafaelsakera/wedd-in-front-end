import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

import { spinner, trash } from "../../../Utils/BootstrapComponents";
import { ApiGetCategoryGuest, ApiDeleteGuest } from "../../../API/GuestList";
import { mapDispathToProps, mapStateToProps } from "../State/GuestTableState";

function GuestTable(props) {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    getGuestData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGuestData = () => {
    ApiGetCategoryGuest(props.categoryId)
      .then((res) => {
        props.GuestListRows(res.res.tableRows);
      })
      .then(() => {
        setShowSpinner(false);
      })
      .catch(() => alert("server error"));
  };

  const deleteGuest = (guestId) => {
    ApiDeleteGuest(guestId)
      .then((res) => {
        if (res.state === "successes") {
          getGuestData();
          props.cardData();
        } else {
          alert("server error");
        }
      })
      .catch(() => alert("server err"));
  };

  const makeTableRows = () => {
    return props.tableRows.map((row) => {
      return (
        <tr key={row.id}>
          <td className="guest-trash">{trash(deleteGuest, row.id)}</td>
          <td>{row.amount}</td>
          <td>{row.guestName}</td>
        </tr>
      );
    });
  };

  const guestSumUp = () => {
    let sum = 0;
    for (let el in props.tableRows) {
      sum += parseInt(props.tableRows[el].amount);
    }
    return sum;
  };

  return (
    <div className="categoryCard">
      <Table responsive className="text-right">
        <thead>
          <tr>
            <th></th>
            <th>כמות</th>
            <th>שם</th>
          </tr>
        </thead>
        <tbody>{makeTableRows()}</tbody>
      </Table>
      <div className="category-card-spinner">
        {spinner(showSpinner)}
      </div>
      <div className="guestSumUp text-right">
        סך הכל אורחים בקבוצה: {guestSumUp()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispathToProps)(GuestTable);
