const router = require("express").Router();
const mongoose = require("mongoose");

router.post("/signup", (req, res) => {
  console.log(req.body);
});

module.exports = router;
