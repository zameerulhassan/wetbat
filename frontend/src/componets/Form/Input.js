import React from "react";
import Wrapper from "../layout/Wrapper";
import classes from "./Form.module.css";
const Input = ({ label, name, type, onChange }) => {
  return (
    <Wrapper styles={classes.controls}>
      <label htmlFor={label}>
        {label}{" "}
      </label>
      <input
        className={classes.input}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      ></input>
    </Wrapper>
  );
};

export default Input;
