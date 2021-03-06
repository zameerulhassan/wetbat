const express = require("express");

const cors = require("cors");

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password1",
  database: "wetbatdb",
});

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

//test
app.get("/", (req, res) => {
  const sqlQuery =
    "INSERT INTO `wetbatdb`.`quotes` (`departure_airport`, `destination_airport`, `no_of_travellers`, `transportation`, `contact_name`, `contact_number`, `contact_email`, `contact_address`, `sales_person`) VALUES ('Barie', 'Hamilton', '4', 'Train', 'Jen', '00000', 'jen@test.com', '999 st. NE New York', 'Ben')";
  db.query(sqlQuery, (err, result) => {
    res.send("db is working..");
  });
});

app.post("/api/quotes", (req, res) => {
  const sqlQuery =
    "INSERT INTO `wetbatdb`.`quotes` (`departure_airport`, `destination_airport`, `no_of_travellers`, `transportation`, `contact_name`, `contact_number`, `contact_email`, `contact_address`, `sales_person`) VALUES ('Barie', 'Hamilton', '4', 'Train', 'Jen', '00000', 'jen@test.com', '999 st. NE New York', 'Ben')";
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
