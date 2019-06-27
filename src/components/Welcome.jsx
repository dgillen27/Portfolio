import React from 'react';

const Welcome = (props) => {
  return (
    <div ref={props.welcome} className="welcome-container">
      <div className="welcome-cover">
        <div className="content" id="welcome-content">
          {/*<img className="profile-img" src="https://i.imgur.com/LJxwaOw.jpg?2" alt="" />*/}
          <div className="first">Hey, I'm Dan Gillen!</div>
          <div className="second">A full stack developer</div>
          <div onClick={props.goProjects} className="welcome-button">Check out my work</div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
