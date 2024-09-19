import Snackbar from "awesome-snackbar";

export const useFetch = ({ url, method = "GET", body = "" }) => {
  return fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    const data = await res.json();
    if (res.ok) return data;

    new Snackbar(data);
  });
};
