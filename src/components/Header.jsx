import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = props => {
  const { goWelcome, goProjects, goAbout, goContact, isTop } = props;
  return (
    <div className={isTop ? "header" : "topHeader"}>
      <h3 className="header-button my-name">Daniel Gillen</h3>
      <div className="header-content">
        <h3 to="/" onClick={goWelcome} className="header-button">
          Home
        </h3>
        <h3 to="/" onClick={goProjects} className="header-button">
          Projects
        </h3>
        <h3 to="/" onClick={goAbout} className="header-button">
          About
        </h3>
        <h3 to="/" onClick={goContact} className="header-button">
          Contact
        </h3>
      </div>
      <HamburgerMenu {...props} />
    </div>
  );
};

export default Header;
