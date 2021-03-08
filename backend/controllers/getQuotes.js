//bring in model

const db = require("../util/database");

exports.quotesControllor = (req, res) => {
  db.query("SELECT * FROM quotes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

//single quote
exports.quoteController = (req, res) => {
  const quote_id = req.body.quote_id;
  db.query("SELECT * FROM quotes WHERE id =?"[quote_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
