const router = require("express").Router();
const joi = require("joi");

const { passwordPattern } = require("../utils");

const schema = joi.object({
  username: joi.string().min(3).max(15).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(passwordPattern).required(),
});

router.get("/login", (req, res) => {
  res.json("login");
});

router.post("/register", (req, res) => {
  const { error } = schema.validate(req.body);
  if (error.message) {
    res.status(400).json(error.message);
  } else {
    res.status(201).json("register");
  }
});

module.exports = router;
