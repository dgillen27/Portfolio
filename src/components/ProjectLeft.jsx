import React from 'react';
import TrackVisibility from 'react-on-screen';

const ProjectLeft = ({isVisible}) => {
  const style = {
    visiblity: isVisible? "visible" : "hidden",
    // transition: '1000ms'
  }
  return (
    <TrackVisibility>
    <div className="project" id="project-left" style={style}>
      <a target="_blank" href="http://anxietymanager.surge.sh"><div className="project-image" id="p4-image"></div></a>
      <div className="project-description" id="right-description">
        <a target="_blank" href="http://anxietymanager.surge.sh">
          <div className="project-name">Anxiety Manager</div>
        </a>
        <h2>Full Stack App</h2>
        <h3>Anxiety Manager is a full stack app built on a Ruby On Rails backend with a React frontend,
        designed to help users toward introspecting about their day to day anxieties through data visualization.</h3>
        <a className="small-link" target="_blank" href="http://anxietymanager.surge.sh">Website</a>
        <br/>
        <a className="small-link" target="_blank" href="https://github.com/dgillen27/anxiety_manager">Github</a>
        <br/>
        <br/>
        <div>Technologies used</div>
        <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
        <img className="icon" src="https://s3.amazonaws.com/image-urls/images/ruby.png" alt="" />
        <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
        <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
        <img className="icon" src="https://s3.amazonaws.com/image-urls/images/npmicon.svg" alt="" />
      </div>
    </div>
    </TrackVisibility>
  )
}

export default ProjectLeft;
