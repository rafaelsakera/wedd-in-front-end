export const ApiGetCardData = async () => {
  const res = await fetch("/api/get-card-data", {
    method: "GET",
  });
  return await res.json();
};

export const ApiGetCategoryGuest = async (categoryId) => {
  const res = await fetch("/api/get-category-guest?id=" + categoryId, {
    method: "GET",
  });
  return await res.json();
};

export const ApiDeleteGuest = async (guestId) => {
  const res = await fetch("/api/delete-guest", {
    method: "POST",
    body: JSON.stringify({
      guestId: guestId,
    }),
  });
  return await res.json();
};

export const ApiAddNewGuest = async (categoryId, guestName, amount) => {
  const res = await fetch("/api/add-new-guest", {
    method: "POST",
    body: JSON.stringify({
      categoryId: categoryId,
      guestName: guestName,
      amount: amount,
    }),
  });
  return await res.json();
};

export const ApiDeleteCard = async (categoryId) => {
  const res = await fetch("/api/delete-card", {
    method: "POST",
    body: JSON.stringify({
      categoryId: categoryId,
    }),
  });
  return await res.json();
};

export const ApiAddNewCard = async (cardName, cardDescription) => {
  const res = await fetch("/api/add-new-card", {
    method: "POST",
    body: JSON.stringify({
      title: cardName,
      baseText: cardDescription,
    }),
  });
  return await res.json();
};
