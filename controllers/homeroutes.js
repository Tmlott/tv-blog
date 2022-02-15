const { Tv, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

// Router Login
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
// bad url path redirect to homepage
router.get("*", (req, res) => {
  res.render("homepage");
});
module.exports = router;
