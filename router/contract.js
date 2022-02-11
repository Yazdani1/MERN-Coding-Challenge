const router = require("express").Router();

const {
  createContract,
  getContract,
  contractDetails,
  deleteContracts,
  geteditData,
} = require("../controller/contract");

//to create contract
router.post("/createcontract", createContract);
//to get created contract
router.get("/get-contract", getContract);

//to get single post
router.get("/contract-details/:id", contractDetails);

//to delete... delete api end point

router.delete("/delete-contract/:id", deleteContracts);

//to edit data.. edit api end point

router.get("/edit-info/:id", geteditData);

module.exports = router;
