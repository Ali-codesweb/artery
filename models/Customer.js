const mongoose = require("mongoose");

const Model = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile_number: {
    type: String,
    required:true
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required:true
  },
  instagram: {
    type: String,
    required:true
  },
  companies: {
    type: [String],
  },
});

const CustomerModel = mongoose.model("Customer", Model);
module.exports = { CustomerModel };
