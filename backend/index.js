const express = require("express");

const cors = require("cors");

const mysql = require("mysql");

//this should come from config/env
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password1",
  port: "5000",
  database: "wetbatdb",
});

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

//ENDPOINT : '/api/createquote'
//METHOD: POST
//quick and dirty > refactor later.
app.post("/api/createquote", (req, res) => {
  const departure = req.body.departure;
  const destination = req.body.destination;
  const departure_date = req.body.departure_date;
  const return_date = req.body.return_date;
  const no_of_people = req.body.no_of_people;
  const transportation = req.body.transportation;
  const name = req.body.name;
  db.query(
    "INSERT INTO quotes (departure, destination, departure_date, return_date, no_of_people, transportation, name) VALUES (?,?,?,?,?,?,?)",
    [
      departure,
      destination,
      departure_date,
      return_date,
      no_of_people,
      transportation,
      name,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("values inserted.");
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
