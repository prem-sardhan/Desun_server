const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const gameSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
 
    
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("game", gameSchema);
