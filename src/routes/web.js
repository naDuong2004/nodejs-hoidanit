const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! My name is Duong");
});

router.get("/home", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;
