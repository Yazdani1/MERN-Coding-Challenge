const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const machinecontractschema = mongoose.Schema({
  machinename: {
    type: String,
  },

  onetimefee: {
    type: mongoose.Types.Decimal128,
  },
  ugaesfee: {
    type: mongoose.Types.Decimal128,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("machinecontract", machinecontractschema);
