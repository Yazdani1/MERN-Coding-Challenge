const mongoose = require("mongoose");

const machinecontractschema = mongoose.Schema({
  machinename: {
    type: String,
  },

  onetimefee: {
    type: mongoose.Types.Decimal128,
  },
  usagefee: {
    type: mongoose.Types.Decimal128,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("machinecontract", machinecontractschema);
