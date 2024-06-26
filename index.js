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

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

//Routes
app.use("/", require("./src/routes"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to COFFEE API",
    user: req.user,
  });
});

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));
require("./src/helpers/sync")();
