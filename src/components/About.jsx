import React from 'react';

const About = (props) => {
  return(
    <div className="about-container" ref={props.about}>
      <h1>About me</h1>
      <div className="content" id="about-content">
        {/*<div><img className="profile-img" src="https://s3.amazonaws.com/image-urls/images/LinkedIn.jpg" alt="" /></div>*/}
        <div className="about">
          <p>I am a full-stack developer based in New York City with a background
          in music performance and music education. I have an affinity for problem
          solving, communication and detail oriented work. My passion for technology
          and people drives me to create the best possible experience
          for users and colleagues alike.
          Interested in learning more? <a target="_blank" href="https://drive.google.com/file/d/1l6nI9ruD8orVsiv7xpmfOsk2_O8AgCoy/view?usp=sharing">Checkout My Resume!</a></p>

        </div>
      </div>
    </div>
  )
}

export default About;
