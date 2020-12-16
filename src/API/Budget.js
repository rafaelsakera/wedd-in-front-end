export const ApieditBudgetData = async (id, editData) => {
  const res = await fetch("/api/edit-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id, data: editData }),
  });

  return res.json();
};

export const ApigetBudgetData = async () => {
  const res = await fetch("/api/get-budget-data", {
    method: "GET",
  });
  return res.json();
};

export const ApipostBudgetData = async (row) => {
  const res = await fetch("/api/post-budget-data", {
    method: "POST",
    body: JSON.stringify(row),
  });

  return res.json();
};

export const ApideleteBudgetData = async (id) => {
  const res = await fetch("/api/delete-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id }),
  });

  return res.json();
};

export const ApigetSpecificBudgetData = async (id) => {
  const res = await fetch("/api/get-specific-budget-data", {
    method: "POST",
    body: JSON.stringify({
      rowId: id,
    }),
  });

  return res.json();
};
