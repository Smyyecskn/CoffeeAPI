"use strict";

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/:

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/user", require("./user"));
// token:
router.use("/token", require("./token"));

module.exports = router;
