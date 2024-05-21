"use strict";
//
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

require("express-async-errors");

app.use(express.json());

//connect to DB
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

//Middlewares


app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to COFFEE API",
    user: req.user,
  });
});

app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));
