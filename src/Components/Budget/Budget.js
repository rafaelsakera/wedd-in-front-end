import React, { Component } from "react";
import "./Budjet.css";

import AddForm from "./AddForm";
import MainbudjetTable from "./MainBudgetTable";
import SumUpTable from "./SumUpTable";
import EditForm from "./EditForm";

class Budjet extends Component {
  state = {
    tableRows: [],
    editform: false,
    editCategory: {},
  };

  componentDidMount = () => {
    fetch("/api/get-budget-data", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          tableRows: [...data.tableRows],
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  addToState = (row) => {
    let newTableRows = this.state.tableRows;
    let maxId = 0;
    newTableRows.forEach((row) => {
      if (row.id > maxId) {
        maxId = row.id;
      }
    });
    row.id = maxId + 1;
    newTableRows.push(row);

    fetch("/api/post-budget-data", {
      method: "POST",
      body: JSON.stringify(row),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.setState({
            tableRows: newTableRows,
          });
        } else {
          alert("server err");
        }
      })
      .catch(() => alert("server err"));
  };

  deleteFromState = (id) => {
    let newTableRows = this.state.tableRows.filter((row) => {
      return row.id !== id;
    });

    fetch("/api/delete-budget-data", {
      method: "POST",
      body: JSON.stringify({ rowId: id }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.setState({
            tableRows: newTableRows,
          });
        } else {
          alert("server err");
        }
      })
      .catch(() => alert("server err"));
  };

  openEditForm = (id) => {
    this.setState({
      editform: true,
      editCategory: this.state.tableRows.filter((row) => {
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
    let category = this.state.tableRows.map((item) => ({ ...item }));
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

    let newState = this.state.tableRows.filter((row) => {
      return row.id !== id;
    });

    newState.push(category);

    newState.sort((a, b) => {
      return a.id - b.id;
    });

    fetch("/api/edit-budget-data", {
      method: "POST",
      body: JSON.stringify({ rowId: id, data: editData }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.state === "successes") {
          this.setState({
            tableRows: newState,
          });
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
          budjetRows={this.state.tableRows}
          deleteFromState={this.deleteFromState}
          openEditForm={this.openEditForm}
        />
        <div className="button_container">
          <AddForm addToState={this.addToState} />
          <EditForm
            showForm={this.state.editform}
            editCategory={this.state.editCategory}
            resetEditState={this.resetEditState}
            onEdit={this.onEdit}
          />
        </div>
        <SumUpTable tableRows={this.state.tableRows} />
      </div>
    );
  }
}

export default Budjet;
