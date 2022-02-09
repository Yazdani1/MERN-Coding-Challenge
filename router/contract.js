const router = require("express").Router();

const {
  createContract,
  getContract,
  contractDetails,
  deleteContracts,
} = require("../controller/contract");

//to create contract
router.post("/createcontract", createContract);
//to get created contract
router.get("/get-contract", getContract);

//to get single post
router.get("/contract-details/:id", contractDetails);
router.delete("/delete-contract/:id", deleteContracts);

module.exports = router;
