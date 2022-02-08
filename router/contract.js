const router = require("express").Router();

const { createContract,getContract } = require("../controller/contract");

//to create contract
router.post("/createcontract", createContract);
//to get created contract
router.get("/get-contract", getContract);

module.exports = router;
