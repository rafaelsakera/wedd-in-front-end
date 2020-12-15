export const ApieditBudgetData = async (id, editData) => {
  const res = await fetch("/api/edit-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id, data: editData }),
  });

  return await res.json();
};

export const ApigetBudgetData = async () => {
  const res = await fetch("/api/get-budget-data", {
    method: "GET",
  });
  return await res.json();
};

export const ApipostBudgetData = async (row) => {
  const res = await fetch("/api/post-budget-data", {
    method: "POST",
    body: JSON.stringify(row),
  });

  return await res.json();
};

export const ApideleteBudgetData = async (id) => {
  const res = await fetch("/api/delete-budget-data", {
    method: "POST",
    body: JSON.stringify({ rowId: id }),
  });

  return await res.json();
};

export const ApigetSpecificBudgetData = async (id) => {
  const res = await fetch("/api/get-specific-budget-data", {
    method: "POST",
    body: JSON.stringify({
      rowId: id,
    }),
  });

  return await res.json();
};
