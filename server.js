const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const router = require("./api");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/rmt_comp_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
