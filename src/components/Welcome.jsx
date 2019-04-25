import React from 'react';

const Welcome = (props) => {
  return (
    <div ref={props.welcome} className="welcome-container">
      <div className="welcome-cover">
        <div className="content" id="welcome-content">
          {/*<img className="profile-img" src="https://i.imgur.com/LJxwaOw.jpg?2" alt="" />*/}
          <div>Hello, I'm Daniel Gillen!</div>
          <div>A full stack web developer</div>
          <div onClick={props.goProjects} className="welcome-button">View My Work</div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
