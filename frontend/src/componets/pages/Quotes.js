import React, { useState, useEffect } from "react";
import classes from './Quotes.module.css'
import Wrapper from "../layout/Wrapper";
const url = "http://localhost:4000/api/quotes";
const Quotes = () => {
  const [quotesList, setQuotesList] = useState([]);

  const getQuotes = async () => {
    const response = await fetch(url);
    const quoteList = await response.json();
    setQuotesList(quoteList);
    console.log(quoteList);
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Wrapper styles="content">
      {quotesList.map((qoute, key) => {
        return (
          <div key={key} className={classes.row}>
            <p1>{qoute.name}</p1>
            <p1>{qoute.departure}</p1>
            <p1>{qoute.departure_date}</p1>
            <p1>{qoute.destination}</p1>
            <p1>{qoute.transportation}</p1>
          </div>
        );
      })}
      <button className={classes.button} onClick={getQuotes}>Refresh</button>
    </Wrapper>
  );
};

export default Quotes;
