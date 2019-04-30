import React from 'react';

const About = (props) => {
  return(
    <div className="about-container" ref={props.about}>
      <h1>About me</h1>
      <div className="content" id="about-content">
        <div><img className="profile-img" src="https://s3.amazonaws.com/image-urls/images/LinkedIn.jpg" alt="" /></div>
        <div className="about">
          <p>I am a passionate, detail oriented Web Developer with a love for user driven desgin, music, hiking and tech.
          I love problem solving and the reward of creating solutions for the problem we face as developers.
          Along with coding itself, I thoroughly enjoy working with a group of people to achieve a common goal. </p>
        </div>
      </div>
    </div>
  )
}

export default About;
