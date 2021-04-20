const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.username,
    pass: process.env.password,
  },
});

module.exports = transporter;
