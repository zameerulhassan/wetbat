import React from "react";
import Wrapper from "../layout/Wrapper";
import classes from "./Form.module.css";
const Input = ({ label, type }) => {
  return (
    <Wrapper styles={classes.controls}>
      <label for={label}>{label} </label>
      <input
        className={classes.input}
        type={type}
        name={label}
        id={label}
      ></input>
    </Wrapper>
  );
};

export default Input;
