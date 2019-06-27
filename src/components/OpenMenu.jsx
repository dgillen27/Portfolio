import React from 'react';

const OpenMenu = (props) => {
  const { changeClass, goWelcome, goProjects, goAbout, goContact} = props
  return (
    <div className="open-menu">
      <h1 onClick={props.changeClass}>X</h1>
      <h2 onClick={() => changeClass() || goWelcome()}>HOME</h2>
      <h2 onClick={() => changeClass() || goProjects()}>PROJECTS</h2>
      <h2 onClick={() => changeClass() || goAbout()}>ABOUT ME</h2>
      <h2 onClick={() => changeClass() || goContact()}>CONTACT</h2>
    </div>
  )
}

export default OpenMenu;
