import React from "react";
import Input from "./Input";
import classes from "./Form.module.css";
const Form = () => {
  return (
    <div>
      <form className={classes.grid}>
        <Input label="FROM" type="text" />
        <Input label="DESTINATION" type="text" />
        <Input label="DEPARTURE DATE" type="text" />
        <Input label="RETURN DATE" type="text" />
        <Input label="PEOPLE" type="text" />
        <Input label="TRANSPORTATION" type="text" />
        <Input label="NAME" type="text" />
        <button>Create a quote</button>
      </form>
    </div>
  );
};

export default Form;
