const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send(JSON.stringify("login"));
});

router.get("/register", (req, res) => {
  res.send(JSON.stringify("register"));
});

module.exports = router;
