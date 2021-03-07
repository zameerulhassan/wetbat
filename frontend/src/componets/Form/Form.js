import React, { useState } from "react";
import Input from "./Input";
import classes from "./Form.module.css";
const Form = () => {
  //refactor this > may be array to update values, using one useState.
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [departure_date, setDeparture_date] = useState("");
  const [return_date, setReturn_date] = useState("");
  const [no_of_people, setNo_of_people] = useState("");
  const [transportation, setTransportation] = useState("");
  const [name, setName] = useState("");
  const getData = () => {
    console.log(
      "the values are: ",
      name,
      departure,
      departure_date,
      destination,
      no_of_people,
      transportation,
      return_date
    );
  };
  return (
    <div className={classes.grid}>
      <Input
        label="DEPARTURE"
        name={departure}
        id="DEPARTURE"
        type="text"
        onChange={(event) => {
          setDeparture(event.target.value);
        }}
        value={departure}
      />
      <Input
        label="DESTINATION"
        name={destination}
        id="DESTINATION"
        type="text"
        onChange={(event) => setDestination(event.target.value)}
        value={destination}
      />
      <Input
        label="DEPARTURE DATE"
        name={departure_date}
        id="DEPARTURE_DATE"
        type="text"
        onChange={(event) => setDeparture_date(event.target.value)}
        value={departure_date}
      />
      <Input
        label="RETURN DATE"
        name={return_date}
        id="RETURN_DATE"
        type="text"
        onChange={(event) => setReturn_date(event.target.value)}
        value={return_date}
      />
      <Input
        label="NO OF PEOPLE"
        name={no_of_people}
        id="NO_OF_PEOPLE"
        type="text"
        onChange={(event) => setNo_of_people(event.target.value)}
        value={no_of_people}
      />
      <Input
        label="TRANSPORTATION"
        name={transportation}
        id="TRANSPORTATION"
        type="text"
        onChange={(event) => setTransportation(event.target.value)}
        value={transportation}
      />
      <Input
        label="NAME"
        name={name}
        id="NAME"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <button onClick={getData}>Create a quote</button>
    </div>
  );
};

export default Form;
