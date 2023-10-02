var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Nur rachmat" });
});
router.get("/profil", function (req, res) {
  res.render("profil", { nama: "usman", npm: 123123123 });
});

module.exports = router;
