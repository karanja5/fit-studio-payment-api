const express = require("express");
const TokenRoute = require("./routes/token"); 

const app = express();
require("dotenv").config();
const cors = require("cors");

const { default: axios } = require("axios");

app.listen(process.env.PORT || 5001, () => {
  console.log("Server running on port" + " " + process.env.PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/token", TokenRoute)

app.get("/", (req, res) => {
  res.send("Mpesa backend");
});



