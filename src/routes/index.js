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
//category:
router.use("/category", require("./category"));
//coffee:
router.use("/coffee", require("./coffee"));
//orders:
router.use("/order", require("./order"));

/* ------------------------------------------------------- */


module.exports = router;
