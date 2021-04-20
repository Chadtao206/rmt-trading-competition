const router = require("express").Router();
const transporter = require("./transport.js");
const db = require("../model");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    await db.create(req.body);
    transporter.sendMail(
      {
        from: process.env.username,
        to: req.body.email,
        subject: "SureRemit Trading Competition Enrollment",
        html: `
      <h2>Thank you for joining the trading competition!</h2>
      <p>Please be sure to perform all trades with your stellar wallet - ${req.body.address}</p>
      <p>Visit our website <a href='https://sureremit-trading-competition.herokuapp.com'>HERE</a> to read the competition rules or see livetracking of rankings.</p>
      <p>Happy Trading!</p>
      `,
      },
      (err) => {}
    );
    res.json("Success!");
  } catch (err) {
    if (err.keyPattern)
      res.json(`Your ${Object.keys(err.keyPattern)[0]} is already registered!`);
  }
});

router.get("/wallets", async (req, res) => {
  const wallets = await db.find();
  res.json(wallets);
});

module.exports = router;
