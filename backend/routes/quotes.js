//create model class and export from models to create db tables.

const express = require("express");
const router = express.Router();

const db = require("../util/database");
//@route
//ENDPOINT : '/api/quotes'
//METHOD: GET
router.get("/api/quotes", (req, res) => {
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
// router.get("/api/quote/quote_id", (req, res) => {
//   const quote_id = req.body.quote_id;
//   db.query("SELECT * FROM quotes WHERE id =?"[quote_id], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

//@route
//ENDPOINT : '/api/createquote'
//METHOD: POST
//quick and dirty > refactor later.
router.post("/api/createquote", (req, res) => {
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

module.exports = router;
