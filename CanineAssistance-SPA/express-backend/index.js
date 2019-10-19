const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "usechemolina",
  database: "team12"
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Successfully connected to the database");
  }
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Server is live");
});

app.get("/userlist", (req, res, next) => {
  const command = `SELECT * FROM appuser`;
  connection.query(command, (err, result) => {
    return res.json({
      data: result
    });
  });
});

app.post("/singleUserInfo", (req, res, next) => {
  const { userEmail } = req.body;
  const command = `SELECT id, healthCondition, firstName, lastName, address FROM appuser WHERE email = '${userEmail}'`;
  connection.query(command, (err, result) => {
    return res.json({
      data: result
    });
  });
});

app.post("/userConditionInfo", (req, res, next) => {
  const { userCondition } = req.body;
  const command = `SELECT * FROM conditionState WHERE healthCondition = '${userCondition}'`;
  connection.query(command, (err, result) => {
    return res.json({
      data: result
    });
  });
});

app.listen(4000, () => {
  console.log(`Server listening on port 4000`);
});
