import React from 'react';

const OpenMenu = (props) => {
  return (
    <div className="open-menu">
      <h1 onClick={props.changeClass}>X</h1>
      <h2 onClick={() => props.changeClass() || props.goWelcome()}>HOME</h2>
      <h2 onClick={() => props.changeClass() || props.goAbout()}>ABOUT ME</h2>
      <h2 onClick={() => props.changeClass() || props.goProjects()}>PROJECTS</h2>
      <h2 onClick={() => props.changeClass() || props.goContact()}>CONTACT</h2>
    </div>
  )
}

export default OpenMenu;
