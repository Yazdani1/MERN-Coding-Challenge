const mongoose = require("mongoose");

const machinecontractschema = new mongoose.Schema({
  machinename: {
    type: String,
  },
  onetimefee: {
    type: Number,
  },
  usagefee: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("MachinecontractSchema", machinecontractschema);
