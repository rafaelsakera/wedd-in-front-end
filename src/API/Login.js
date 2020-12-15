export const ApiLogin = async (data) => {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return await res.json();
};
