import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children, styles,id }) => {
  return <div className={styles} id={id}>{children}</div>;
};

Wrapper.propTypes = {
  styles: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Wrapper.defaultProps = {
  styles: "",
  id: "",
};

export default Wrapper;
