import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu'

const Header = (props) => {
  return (
    <div className={props.isTop? "header": "topHeader"}>

      <div className="header-content">
        <Link to="/" onClick={props.goWelcome} className="header-button">Home</Link>
        <Link to="/" onClick={props.goProjects} className="header-button">Projects</Link>
        <Link to="/" onClick={props.goAbout} className="header-button">About</Link>
        <Link to="/" onClick={props.goContact} className="header-button">Contact</Link>
      </div>
      <HamburgerMenu {...props}/>
    </div>
  )
}

export default Header;
