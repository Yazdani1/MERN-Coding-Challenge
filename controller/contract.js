const Contract = require("../model/Contract");

//create contract
exports.createContract = (req, res) => {
  const { machinename, onetimefee, usagefee } = req.body;

  //   if (!machinename) {
  //     return res.status(400).json({ error: "Machine name is required" });
  //   }
  //   if (!onetimefee) {
  //     return res.status(400).json({ error: "Onetime fee is required" });
  //   }
  //   if (!usagefee) {
  //     return res.status(400).json({ error: "Usage fee is required" });
  //   }

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

exports.getContract = (req, res) => {
  Contract.find({})
    .then((contractpost) => {
      res.json(contractpost);
    })
    .catch((err) => {
      console.log(err);
    });
};
