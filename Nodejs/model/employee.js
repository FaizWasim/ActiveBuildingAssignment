const mongoose = require("mongoose");
var Employee = mongoose.model("Employee", {
  itemCode: { type: String },
  name1: { type: String },
  name2: { type: String },
  price: { type: String },
  vendorName: { type: String },
  date: { type: String },
});
module.exports = { Employee };
