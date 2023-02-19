const mongoose = require("mongoose");

require("dotenv").config();

const db = process.env.Mongo_URL;

module.exports = () => {
  return mongoose.connect(db);
};
