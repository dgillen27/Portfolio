import React from 'react';
import ProjectGrid from './ProjectGrid'

const Projects = (props) => {
  return(
    <div className="projects-container" ref={props.projects}>
      <div className="content" id="project-content">
        <div className="project" id="project-4">
        <a target="_blank" href="http://anxietymanager.surge.sh"><img className="project-img" src="https://i.imgur.com/cibV9JR.png" alt="" /></a>
          {/*<div className="project-img"></div>*/}
          <div className="project-description">
            <h1>Anxiety Manager</h1>
            <h2>Full Stack App</h2>
            <h3>Anxiety Manager is a full stack app built on a Rails backend with React frontend,
            designed to help users toward introspecting about their day to day anxieties</h3>
            <a target="_blank" href="http://anxietymanager.surge.sh">Checkout the app</a>
            <br/>
            <a target="_blank" href="https://github.com/dgillen27/anxiety_manager">Github</a>
            <br/>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/ruby.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/npmicon.svg" alt="" />
          </div>
        </div>

        <div className="project">
          <a target="_blank" href="https://foregoing-celery.surge.sh/"><img className="project-img" src="https://i.imgur.com/TEDCNZw.png" alt="" /></a>
          {/*<div className="project-img"></div>*/}
          <div className="project-description">
            <h1>Beat HostR</h1>
            <h2>Full Stack App</h2>
            <h3>Beat HostR is a platform for uploading your music and sharing it with others.
            Upload your music here and share links to your music with your friends.</h3>
            <a target="_blank" href="https://foregoing-celery.surge.sh/">Checkout the app</a>
            <br/>
            <a target="_blank" href="https://github.com/BrunoCappelleti/beat-hostR">Github</a>
            <br/>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/nodejs.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/npmicon.svg" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/awsicon.png" alt="" />
          </div>
        </div>

        <div className="project">
          <a target="_blank" href="http://breweryfinder.surge.sh/"><img className="project-img" src="https://i.imgur.com/GxJ5KBw.png" alt="" /></a>
          {/*<div className="project-img"></div>*/}
          <div className="project-description">
            <h1>Brewery Finder</h1>
            <h2>Front End App</h2>
            <h3>Brewery Finder is designed for those who love going to breweries!
            Search for breweries near you and find your next spot to grab some beer!</h3>
            <a target="_blank" href="http://breweryfinder.surge.sh/">Checkout the app</a>
            <br/>
            <a target="_blank" href="https://github.com/dgillen27/Brewery-Finder-App">Github</a>
            <br/>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
          </div>
        </div>

        <div className="project">
          <a target="_blank" href="http://matchyshapes.surge.sh/"><img className="project-img" src="https://i.imgur.com/6IcnWlD.png" alt="" /></a>
          {/*<div className="project-img"></div>*/}
          <div className="project-description">
            <h1>Matchy Shapes</h1>
            <h2>Front End App</h2>
            <h3>Matchy shapes is an interactive point and click game. Try to change all of the shapes to the same type within the time limit</h3>
            <a target="_blank" href="http://matchyshapes.surge.sh/">Checkout the app</a>
            <br/>
            <a target="_blank" href="https://github.com/dgillen27/Project1_WDI">Github</a>
            <br/>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/jsicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
