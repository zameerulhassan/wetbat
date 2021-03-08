//refactor:  monolithic to controller , models... & util/config for db credentials.
//create model class and export from models to create db tables.
//take route from this file to routes folder.
const db = require("./util/database");

const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

//@route
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

//@route
//ENDPOINT : '/api/quotes'
//METHOD: GET
app.get("/api/quotes", (req, res) => {
  db.query("SELECT * FROM quotes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//TO DO....by monday.
//@route
//ENDPOINT : '/api/quotes/:id'
//METHOD: GET
// app.get("/api/quote/quote_id", (req, res) => {
//   const quote_id = req.body.quote_id;
//   db.query("SELECT * FROM quotes WHERE id =?"[quote_id], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
