const router = require("express").Router();
const transporter = require("./transport.js");
const db = require("../model");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    await db.create(req.body);
    res.json("Success!");
  } catch (err) {
    if (err.keyPattern)
      res.json(`Your ${Object.keys(err.keyPattern)[0]} is already registered!`);
  }
});

module.exports = router;
