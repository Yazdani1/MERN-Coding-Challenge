const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const jobposts = mongoose.Schema({
  machinename: {
    type: String,
  },

  onetimefee: {
    type: Number,
  },
  ugaesfee: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Jobposts", jobposts);
