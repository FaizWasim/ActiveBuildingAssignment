const express = require("express");
const router = express.Router();
var { Employee } = require("../model/employee");
var ObjectId = require("mongoose").Types.ObjectId;

//get all
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error..!" + JSON.stringify(err, undefined, 2));
    }
  });
});
//find by id
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No employee with id : ${req.params.id}`);
  }
  Employee.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error : " + JSON.stringify(err, undefined, 2));
    }
  });
});
//post employee
router.post("/", (req, res) => {
  var emp = new Employee({
    itemCode: req.body.itemCode,
    name1: req.body.name1,
    name2: req.body.name2,
    price: req.body.price,
    vendorName: req.body.vendorName,
    date: req.body.date,
  });
  emp.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error : " + JSON.stringify(err, undefined, 2));
    }
  });
});

//update employee on id
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No employee with id : ${req.params.id}`);
  }
  var emp = {
    itemCode: req.body.itemCode,
    name1: req.body.name1,
    name2: req.body.name2,
    price: req.body.price,
    vendorName: req.body.vendorName,
    date: req.body.date,
  };
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log("Error : " + JSON.stringify(err, undefined, 2));
      }
    }
  );
});

//delete employee on id
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No employee with id : ${req.params.id}`);
  }
  Employee.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error : " + JSON.stringify(err, undefined, 2));
    }
  });
});

module.exports = router;
