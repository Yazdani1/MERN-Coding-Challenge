const router = require("express").Router();
require("dotenv").config();

const { createContract } = require("../controller/contract");

//create contract api end point
router.post("/create-contract", createContract);

module.exports = router;
