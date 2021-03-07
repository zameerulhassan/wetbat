import React, { useState, useEffect } from "react";
import classes from "./Quotes.module.css";
import Wrapper from "../layout/Wrapper";
const url = "http://localhost:4000/api/quotes";
const Quote = () => {
  //const [id, setId] = useState("0");

  // const getQuotes = async () => {
  //   const response = await fetch(url+"/"+id);
  //   const id = await response.json();
  //   setId(id);
  //   console.log(id);
  // };
  // useEffect(() => {
  //   getQuotes();
  // }, []);

  return (
    <Wrapper styles="content">
      return (<div>single Quote</div>
      <button className={classes.button}>Refresh</button>
    </Wrapper>
  );
};

export default Quote;
