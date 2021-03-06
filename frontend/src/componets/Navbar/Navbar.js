import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import image from "../../assets/images/user1.jpg";
import Icon from "../Icon";
const Navbar = ({ icon, title, subtitle }) => {
  return (
    <nav className="navbar bg-primary">
      <div className="logo">
        {/* placeholder icon only, update on assets update. */}
        <div className="icon1">
          <i className={icon} style={{ marginRight: "1rem" }}></i>
        </div>

        <div style={{ display: "inline-block" }}>
          <h1>{title}</h1>
          <h6>{subtitle}</h6>
        </div>
      </div>
      {/*refactor this to separate component.*/}
      <ul>
        <li>
          <input type="text" name="text" placeholder="search" />
        </li>
        <li>
          <Icon image="far fa-bell" />
        </li>
        <li>
          <Icon image="fas fa-comment-alt" />
        </li>
        <li>
          <Icon image="fas fa-cog" />
        </li>
        <li>
          {/* image will come from database after user authentication . */}

          <img className="image" src={image} alt="profile" />
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "",
  subtitle: "",
  icon: "",
};

export default Navbar;
