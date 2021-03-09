import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Quotes.module.css";
import Wrapper from "../layout/Wrapper";
const url = "http://localhost:4000/api/quotes";
const Quotes = (props) => {
  const [quotesList, setQuotesList] = useState([]);

  const getQuotes = async () => {
    const response = await fetch(url);
    const quoteList = await response.json();
    setQuotesList(quoteList);
    //console.log(quoteList);
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <Wrapper styles="content">
      {quotesList.map((qoute, key) => {
        return (
          <Link key={key} to={"/quote/" + qoute.id}>
            <div className={classes.row}>
              <p>{qoute.name}</p>
              <p>{qoute.departure}</p>
              <p>{qoute.departure_date}</p>
              <p>{qoute.destination}</p>
              <p>{qoute.transportation}</p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Quotes;
