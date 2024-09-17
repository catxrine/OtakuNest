const express = require("express");
const app = express();

require("dotenv").config({ path: "../.env" });

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(process.env.VITE_SERVER_PORT, () =>
  console.log("Example app is listening on port", process.env.VITE_SERVER_PORT)
);
