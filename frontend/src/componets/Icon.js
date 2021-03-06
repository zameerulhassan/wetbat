import React, { Fragment } from "react";

const Icon = (props) => {
  return (
    <Fragment>
      <i className={props.image}>{props.children}</i>
    </Fragment>
  );
};

export default Icon;
