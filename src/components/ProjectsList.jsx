import React, { useEffect, useState } from "react";
import Project from "./Project";
import npmPackage from "../images/npmPackage.png";
import chatMessages from "../images/chatMessages.png";
import socket from "../images/socket.png";

export default function ProjectsList(props) {
  function useOnScreen(options) {
    const [ref, setRef] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options);

      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (ref) {
          observer.observe(ref);
        }
      };
    }, [ref, options]);

    return [setRef, visible];
  }

  const [chat, visibleChat] = useOnScreen({ rootMargin: "-50px" });
  const [nav, visibleNav] = useOnScreen({ rootMargin: "-50px" });
  const [ref, visible] = useOnScreen({ rootMargin: "-50px" });
  const [ref1, visible1] = useOnScreen({ rootMargin: "-50px" });
  const [ref2, visible2] = useOnScreen({ rootMargin: "-50px" });
  const [ref3, visible3] = useOnScreen({ rootMargin: "-50px" });
  const [ref4, visible4] = useOnScreen({ rootMargin: "-5px" });

  return (
    <div className="projects-container" ref={props.projects}>
      <h1 id="project-label">Projects</h1>
      <div className="content" id="project-content">
        <Project
          rightOrientation={false}
          projectRef={chat}
          visible={visibleChat}
          projectName="Group Chat"
          projectType="Full-Stack App"
          projectLink="http://groupchat.surge.sh"
          githubLink="https://github.com/dgillen27/chatAppWebSockets"
          projectImage={chatMessages}
          imagePositionLeft={true}
          projectDescription="Group Chat is a simple chat app, created for the purpose of learning how to implement 
          and deploy an app with WebSockets using SocketIO. If you want to test out the responsiveness of the 
          WebSockets, try opening this app in another browser or an incognito window and chat with yourself!"
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/nodejs.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png",
            "https://s3.amazonaws.com/image-urls/images/npmicon.svg",
            socket
          ]}
        />
        <Project
          projectRef={nav}
          rightOrientation={true}
          visible={visibleNav}
          projectName="Top-Detecting-NavBar"
          projectType="NPM Package/Open Source"
          projectLink="https://www.npmjs.com/package/react-top-detecting-navbar"
          githubLink="https://github.com/dgillen27/react-top-detecting-navbar"
          projectImage={npmPackage}
          imagePositionLeft={true}
          projectDescription="Top-Detecting-Navbar is an NPM package built using React 
          intended for other developers to use in ther projects. This React component, 
          checks if the user is at the top of the page and assigns new styles to it based on its position!"
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png",
            "https://s3.amazonaws.com/image-urls/images/npmicon.svg"
          ]}
        />
        <Project
          rightOrientation={false}
          projectRef={ref}
          visible={visible}
          projectName="Anxiety Manager"
          projectType="Full Stack App"
          projectLink="http://anxietymanager.surge.sh"
          githubLink="https://github.com/dgillen27/anxiety_manager"
          projectImage="https://i.imgur.com/cibV9JR.png"
          projectDescription="Anxiety Manager is a full stack app built on a Ruby On Rails
              backend with a React frontend, designed to help users toward
              introspecting about their day to day anxieties through data
              visualization."
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/ruby.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png",
            "https://s3.amazonaws.com/image-urls/images/npmicon.svg"
          ]}
        />

        <Project
          rightOrientation={true}
          imagePositionLeft={true}
          projectRef={ref1}
          visible={visible1}
          projectName="Sushi Zo"
          projectType="Front End App"
          projectLink="http://sushizo-redesign.surge.sh"
          githubLink="https://github.com/dgillen27/sushi_zo_redesign_ux"
          projectImage="https://i.imgur.com/JFXP2QN.png"
          projectDescription="For this project, I had the pleasure of working with some very
              talented to UX designers to build a redesign of an already
              existing website."
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png"
          ]}
        />

        <Project
          projectRef={ref2}
          rightOrientation={false}
          visible={visible2}
          projectName="Beat HostR"
          projectType="Full Stack App"
          projectLink="https://foregoing-celery.surge.sh/"
          githubLink="https://github.com/BrunoCappelleti/beat-hostR"
          imagePositionLeft={true}
          projectImage="https://i.imgur.com/TEDCNZw.png"
          projectDescription="Beat HostR is built on an Express backend and a React front end,
              it is a platform for uploading your music and sharing it with
              others. Upload your music here and search through the music of
              other musicians on the site."
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/nodejs.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png",
            "https://s3.amazonaws.com/image-urls/images/npmicon.svg",
            "https://s3.amazonaws.com/image-urls/images/awsicon.png"
          ]}
        />

        <Project
          rightOrientation={true}
          imagePositionLeft={true}
          projectRef={ref3}
          visible={visible3}
          projectName="Brewery Finder"
          projectType="Front End App"
          projectLink="http://breweryfinder.surge.sh/"
          githubLink="https://github.com/dgillen27/Brewery-Finder-App"
          projectImage="https://i.imgur.com/GxJ5KBw.png"
          projectDescription="Brewery Finder is a React app that consumes the OpenBreweryDB API,
              it's designed for those who love beer! Search for breweries near
              you and find your next spot to grab some beer!"
          icons={[
            "https://s3.amazonaws.com/image-urls/images/react_icon.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png",
            "https://s3.amazonaws.com/image-urls/images/npmicon.svg",
            "https://s3.amazonaws.com/image-urls/images/google-maps.png"
          ]}
        />

        <Project
          rightOrientation={false}
          projectRef={ref4}
          visible={visible4}
          projectName="Matchy Shapes"
          projectType="Front End App"
          projectLink="http://matchyshapes.surge.sh/"
          githubLink="https://github.com/dgillen27/Project1_WDI"
          // imagePositionLeft={true}
          projectImage="https://i.imgur.com/6IcnWlD.png"
          projectDescription="Matchy shapes is an interactive javascript point and click game.
              Try to change all of the shapes to the same type within the time
              limit!"
          icons={[
            "https://s3.amazonaws.com/image-urls/images/jsicon.png",
            "https://s3.amazonaws.com/image-urls/images/htmlicon.png",
            "https://s3.amazonaws.com/image-urls/images/css.png"
          ]}
        />
      </div>
    </div>
  );
}
