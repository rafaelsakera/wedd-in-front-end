import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { GuestListRows } from "../../../State/Actions/guestActions";
import {
  getCategoryGuestGET,
  deleteGuestPOST,
} from "../../../Utils/ApiRequest";
import { spinner, trash } from "../../../Utils/BootstrapComponents";

class GuestTable extends Component {
  state = {
    guestSumUp: 0,
    showSpinner: true,
  };

  componentDidMount = () => {
    this.getGuestData();
  };

  getGuestData = () => {
    getCategoryGuestGET(this.props.categoryId)
      .then((res) => res.json())
      .then((res) => {
        this.props.GuestListRows(res.res.tableRows);
      })
      .then(() => {
        this.setState({
          showSpinner: false,
        });
      })
      .catch(() => alert("server error"));
  };

  deleteGuest = (guestId) => {
    deleteGuestPOST(guestId)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.getGuestData();
          this.props.cardData();
        } else {
          alert("server error");
        }
      })
      .catch(() => alert("server err"));
  };

  makeTableRows = () => {
    return this.props.tableRows.map((row) => {
      return (
        <tr key={row.id}>
          <td className="guest-trash">{trash(this.deleteGuest, row.id)}</td>
          <td>{row.amount}</td>
          <td>{row.guestName}</td>
        </tr>
      );
    });
  };

  guestSumUp = () => {
    let sum = 0;
    for (let el in this.props.tableRows) {
      sum += parseInt(this.props.tableRows[el].amount);
    }
    return sum;
  };

  render() {
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
          <tbody>{this.makeTableRows()}</tbody>
        </Table>
        <div className="category-card-spinner">
          {spinner(this.state.showSpinner)}
        </div>
        <div className="guestSumUp text-right">
          סך הכל אורחים בקבוצה: {this.guestSumUp()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableRows: state.guestListRows,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    GuestListRows: (data) => {
      dispatch(GuestListRows(data));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(GuestTable);
