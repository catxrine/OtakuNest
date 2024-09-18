const express = require("express");
const app = express();

require("dotenv").config({ path: "../.env" });

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./router")(app);

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(process.env.VITE_SERVER_PORT, () =>
  console.log("App is listening on port", process.env.VITE_SERVER_PORT)
);
