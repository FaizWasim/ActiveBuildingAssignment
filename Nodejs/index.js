const express = require("express");
const bodyParser = require("body-parser");
const employeeController = require("./controller/employeeController");
var { mongoose } = require("./db");
var app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.listen(3000, () => {
  console.log("App started at server post 3000");
});
app.use("/employees", employeeController);
