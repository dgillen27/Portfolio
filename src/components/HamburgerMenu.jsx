import React from "react";

const HamburgerMenu = props => {
  return (
    <div className="burger-container" onClick={props.changeClass}>
      <div className="burger"></div>
      <div className="burger burger-long" id="burger2"></div>
      <div className="burger" id="burger3"></div>
    </div>
  );
};

export default HamburgerMenu;
