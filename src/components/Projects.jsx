import React from 'react';
import TrackVisibility from 'react-on-screen';
import ProjectLeft from './ProjectLeft'

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null)
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.observe(ref)
      }
    }
  }, [ref, options])

  return [setRef, visible]
}


const Projects = (props) => {
  const [ref, visible] = useOnScreen({ rootMargin: "-50px" })
  const [ref1, visible1] = useOnScreen({ rootMargin: "-50px" })
  const [ref2, visible2] = useOnScreen({ rootMargin: "-50px" })
  const [ref3, visible3] = useOnScreen({ rootMargin: "-50px" })
  const [ref4, visible4] = useOnScreen({ rootMargin: "-5px" })
  return(
    <div className="projects-container" ref={props.projects}>
      <h1 id="project-label">Projects</h1>
      <div className="content" id="project-content">

        <div className="project" id="project-left" ref={ref} style={{
          opacity: visible? "1": "0",
          transform: visible? "translateX(0)" : "translateX(-30vw)"
        }}>
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

        <div className="project" id="project-right" ref={ref1} style={{
          opacity: visible1? "1": "0",
          transform: visible1? "translateX(0)" : "translateX(30vw)"
        }}>
          <div className="project-description" id="left-description">
            <a className="right-a" target="_blank" href="http://sushizo-redesign.surge.sh">
              <div className="project-name">Sushi Zo</div>
            </a>
            <h2>Front End App</h2>
            <h3>For this project, I had the pleasure of working with some very talented to UX designers to build a redesign of an already existing website.</h3>
            <a className="small-link" target="_blank" href="http://sushizo-redesign.surge.sh">Website</a>
            <br/>
            <a className="small-link" target="_blank" href="https://github.com/dgillen27/sushi_zo_redesign_ux">Github</a>
            <br/>
            <br/>
            <div>Technologies used</div>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
          </div>
          <a target="_blank" href="http://sushizo-redesign.surge.sh"><div className="project-image" id="ux-image"></div></a>
        </div>

        <div className="project" id="project-left" ref={ref2} style={{
          opacity: visible2? "1": "0",
          transform: visible2? "translateX(0)" : "translateX(-30vw)"
        }}>
          <a target="_blank" href="https://foregoing-celery.surge.sh/"><div className="project-image" id="p3-image"></div></a>
          <div className="project-description" id="right-description">
            <a target="_blank" href="https://foregoing-celery.surge.sh/">
              <div className="project-name">Beat HostR</div>
            </a>
            <h2>Full Stack App</h2>
            <h3>Beat HostR is built on an Express backend and a React front end, it is a platform for uploading your music and sharing it with others.
            Upload your music here and search through the music of other musicians on the site.</h3>
            <a className="small-link" target="_blank" href="https://foregoing-celery.surge.sh/">Website</a>
            <br/>
            <a className="small-link" target="_blank" href="https://github.com/BrunoCappelleti/beat-hostR">Github</a>
            <br/>
            <br/>
            <div>Technologies used</div>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/nodejs.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/npmicon.svg" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/awsicon.png" alt="" />
          </div>
        </div>

        <div className="project" id="project-right" ref={ref3} style={{
          opacity: visible3? "1": "0",
          transform: visible3? "translateX(0)" : "translateX(30vw)"
        }}>
          <div className="project-description" id="left-description">
            <a target="_blank" href="http://breweryfinder.surge.sh/">
            <div className="project-name">Brewery Finder</div>
            </a>
            <h2>Front End App</h2>
            <h3>Brewery Finder is a React app that consumes the OpenBreweryDB API, it's designed for those who love beer!
            Search for breweries near you and find your next spot to grab some beer!</h3>
            <a className="small-link" target="_blank" href="http://breweryfinder.surge.sh/">Website</a>
            <br/>
            <a className="small-link" target="_blank" href="https://github.com/dgillen27/Brewery-Finder-App">Github</a>
            <br/>
            <br/>
            <div>Technologies used</div>
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/react_icon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/htmlicon.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/css.png" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/npmicon.svg" alt="" />
            <img className="icon" src="https://s3.amazonaws.com/image-urls/images/google-maps.png" alt="" />
          </div>
          <a target="_blank" href="http://breweryfinder.surge.sh/"><div className="project-image" id="p2-image"></div></a>
        </div>

        <div className="project" id="project-left" ref={ref4} style={{
          opacity: visible4? "1": "0",
          transform: visible4? "translateX(0)" : "translateX(-30vw)"
        }}>
          <a target="_blank" href="http://matchyshapes.surge.sh/"><div className="project-image" id="p1-image"></div></a>
          <div className="project-description" id="right-description">
            <a target="_blank" href="http://matchyshapes.surge.sh/">
              <div className="project-name">Matchy Shapes</div>
            </a>
            <h2>Front End App</h2>
            <h3>Matchy shapes is an interactive javascript point and click game. Try to change all of the shapes to the same type within the time limit!</h3>
            <a className="small-link" target="_blank" href="http://matchyshapes.surge.sh/">Website</a>
            <br/>
            <a className="small-link" target="_blank" href="https://github.com/dgillen27/Project1_WDI">Github</a>
            <br/>
            <br/>
            <div>Technologies used</div>
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
