import React, { Component } from "react";
import { connect } from "react-redux";
import "./Budjet.css";

import {
  getTableRows,
  changeBudgetData,
} from "../../State/Actions/badgetActions";

import { editBudgetDataPOST, getBudgetDataGET } from "../../Utils/ApiRequest";
import MainbudjetTable from "./SubComponents/MainBudgetTable";
import SumUpTable from "./SubComponents/SumUpTable";
import EditForm from "./SubComponents/EditForm";
import AddForm from "./SubComponents/AddForm";

class Budjet extends Component {
  state = {
    editCategory: {},
    editform: false,
    showSpinner: true,
  };

  componentDidMount = () => {
    this.getBudjetData();
  };

  getBudjetData = () => {
    getBudgetDataGET()
      .then((res) => res.json())
      .then((data) => {
        this.props.getTableRows(data.tableRows);
      })
      .then(() => {
        this.setState({
          showSpinner: false,
        });
      })
      .catch(() => {
        this.setState({
          showSpinner: false,
        });
        alert("server err");
      });
  };

  openEditForm = (id) => {
    this.setState({
      editform: true,
      editCategory: this.props.tableRows.filter((row) => {
        return row.id === id;
      }),
    });
  };

  resetEditState = () => {
    this.setState({
      editform: false,
      editCategory: {},
    });
  };

  onEdit = (editData, id) => {
    let category = this.props.tableRows.map((item) => ({ ...item }));
    category = category.filter((row) => {
      return row.id === id;
    })[0];

    if (editData.editFormCategory !== undefined) {
      category.category = editData.editFormCategory;
    }
    if (editData.editFormAmount !== undefined) {
      category.amount = editData.editFormAmount;
    }
    if (editData.editFormUnitPrice !== undefined) {
      category.unitPrice = editData.editFormUnitPrice;
    }
    if (editData.editFormPayed !== undefined) {
      category.payed = editData.editFormPayed;
    }

    editBudgetDataPOST(id, editData)
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.props.changeBudgetData(category);
        } else {
          alert("server err");
        }
      })
      .catch((err) => alert(err));
  };

  render() {
    return (
      <div className="budget">
        <MainbudjetTable
          showSpinner={this.state.showSpinner}
          budjetRows={this.props.tableRows}
          openEditForm={this.openEditForm}
        />
        <div className="button_container">
          <AddForm />
          <EditForm
            showForm={this.state.editform}
            editCategory={this.state.editCategory}
            resetEditState={this.resetEditState}
            onEdit={this.onEdit}
          />
        </div>
        <SumUpTable />
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
    getTableRows: (data) => {
      dispatch(getTableRows(data));
    },
    changeBudgetData: (row) => {
      dispatch(changeBudgetData(row));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Budjet);
