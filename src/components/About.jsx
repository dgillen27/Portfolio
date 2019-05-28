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
          for users and colleagues alike.</p>
          <div className="about-icon-container">
            <a target="_blank" href="https://drive.google.com/file/d/1pfd2euOcSUqrx49ZjljKSiquVrDSvLf_/view?usp=sharing"><img className="about-icon" src="https://s3.amazonaws.com/image-urls/images/resume-icon-16.jpg" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/danielgillen/"><img className="about-icon" src="https://s3.amazonaws.com/image-urls/images/square-linkedin-512.png" alt="" /></a>
            <a target="_blank" href="https://github.com/dgillen27"><img className="about-icon" src="https://s3.amazonaws.com/image-urls/images/githubicon.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
