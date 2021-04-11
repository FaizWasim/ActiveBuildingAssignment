var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Activebuilding", (err) => {
  if (!err) {
    console.log("Connected..!!");
  } else {
    console.log("NOT connected..!" + JSON.stringify(err, undefined, 2));
  }
});
module.exports = mongoose;
