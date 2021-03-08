//complete the model to use in all controllers.

module.exports = class Quote {
  constructor(
    departure,
    destination,
    departure_date,
    return_date,
    no_of_people,
    transportation,
    name
  ) {
    this.departure = departure;
    this.destination = destination;
    this.departure_date = departure_date;
    this.return_date = return_date;
    this.no_of_people = no_of_people;
    this.transportation = transportation;
    this.name = name;
  }
  save() {
    //TO DO.  insert into db
  }

  static fetchAllQuotes() {
    //TO DO.  get request from db
    this.Quote;
  }
};
