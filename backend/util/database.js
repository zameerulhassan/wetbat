const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password1",
  port: "5000",
  database: "wetbatdb",
});

module.exports = db;
