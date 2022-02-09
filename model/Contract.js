const mongoose = require("mongoose");

const machinecontractschema = new mongoose.Schema({
  machinename: {
    type: String,
  },
  onetimefee: {
    type: Number, //to add float but we can also use number and it will work for integer and float type
  },
  usagefee: {
    type: Number, //to add float but we can also use number and it will work for integer and float type
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("MachinecontractSchema", machinecontractschema);
