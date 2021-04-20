const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  email: { type: String, unique: true },
  address: { type: String, unique: true },
  authorized: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("entry", dataSchema);
