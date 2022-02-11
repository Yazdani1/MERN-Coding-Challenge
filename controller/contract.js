const Contract = require("../model/Contract");

//create contract
exports.createContract = (req, res) => {
  const { machinename, onetimefee, usagefee } = req.body;

  if (!machinename) {
    return res.status(400).json({ error: "Machine name is required" });
  }
  if (!onetimefee) {
    return res.status(400).json({ error: "Onetime fee is required" });
  }
  if (!usagefee) {
    return res.status(400).json({ error: "Usage fee is required" });
  }

  const savemachinecontract = new Contract({
    machinename,
    onetimefee,
    usagefee,
  });

  Contract.create(savemachinecontract)
    .then((contractData) => {
      res.json(contractData);
    })
    .catch((err) => {
      console.log(err);
    });
};

//to get created contracts

exports.getContract = (req, res) => {
  Contract.find({})
    .sort({ date: "DESC" })
    .then((contractpost) => {
      res.json(contractpost);
    })
    .catch((err) => {
      console.log(err);
    });
};

//contract details

exports.contractDetails = (req, res) => {
  var detailsquery = { _id: req.params.id };

  Contract.findOne(detailsquery)
    .then((contractdetails) => {
      res.json(contractdetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete contracts

exports.deleteContracts = (req, res) => {
  var deletequery = { _id: req.params.id };
  Contract.findByIdAndDelete(deletequery)
    .then((contractsdelete) => {
      res.json(contractsdelete);
    })
    .catch((err) => {
      console.log(err);
    });
};

//get edit data in the input field

exports.geteditData = (req, res) => {
  var editquery = { _id: req.params.id };

  Contract.findOne(editquery)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update contract information

exports.updateContract = (req, res) => {
  var updatequery = { _id: req.params.id };

  const { machinename, onetimefee, usagefee } = req.body;

  if (!machinename) {
    return res.status(400).json({ error: "Machine name is required" });
  }
  if (!onetimefee) {
    return res.status(400).json({ error: "Onetime fee is required" });
  }
  if (!usagefee) {
    return res.status(400).json({ error: "Usage fee is required" });
  }

  Contract.updateOne(updatequery, {
    $set: {
      machinename: machinename,
      onetimefee: onetimefee,
      usagefee: usagefee,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
