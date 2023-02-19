//const { application } = require("express")
const express = require("express");
const cors = require("cors");

const connect = require("./src/configs/db");
const gameController = require("./src/controllers/game.controller");
const cartController = require("./src/controllers/cart.controller");
const { register, login } = require("./src/controllers/auth.controller");
const userController = require("./src/controllers/user.controller");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/game", gameController);
app.use("/cart", cartController);
app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.get("/",(req,res)=>{
  res.send("frvcrf")
})

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error);
  }
});
