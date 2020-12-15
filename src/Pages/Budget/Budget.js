import React from "react";
import "./Budjet.css";

import AddForm from "./Components/AddForm/AddForm";
import EditForm from "./Components/EditForm/EditForm";
import SumUpTable from "./Components/SumUpTable/SumUpTable";
import BudjetTable from "./Components/BudgetTable/BudgetTable";

function Budjet() {
  return (
    <div className="budget">
      <BudjetTable />
      <EditForm />
      <AddForm />
      <SumUpTable />
    </div>
  );
}

export default Budjet;
