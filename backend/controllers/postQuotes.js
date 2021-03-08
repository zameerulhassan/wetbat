const db = require("../util/database");

exports.postQuotes = (req, res) => {
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
};
