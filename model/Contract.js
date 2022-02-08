const mongoose = require("mongoose");

const machinecontractschema = new mongoose.Schema({
  machinename: {
    type: String,
  },
  onetimefee: {
    type: mongoose.Decimal128, //to add float but we can also use number and it will work for integer and float type
  },
  usagefee: {
    type: mongoose.Decimal128, //to add float but we can also use number and it will work for integer and float type
  },
});
module.exports = mongoose.model("MachinecontractSchema", machinecontractschema);
