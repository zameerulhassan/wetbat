
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
