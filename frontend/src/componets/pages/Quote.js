//TO DO... list style.

import React, { useState, useEffect } from "react";
import Spinner from "../../componets/Spinner";
import classes from "./Quotes.module.css";
import Wrapper from "../layout/Wrapper";
const url = "http://localhost:4000/api/quote";
const Quote = (props) => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const id = props.match.params.id;
    getQuotes(id);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuotes = async (id) => {
    const response = await fetch(url + "/" + id);
    const quote = await response.json();
    setQuote(quote[0]);
    console.log(quote);
  };

  return (
    <Wrapper styles="content">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.column}>
          <h1>Quotations ID: {quote.id}</h1>
          <p>Customer Name: {quote.name}</p>
          <p>Departure from: {quote.departure}</p>
          <p>Departure Date:{quote.departure_date}</p>
          <p>Destination: {quote.destination}</p>
          <p>Transportation:{quote.transportation}</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Quote;
