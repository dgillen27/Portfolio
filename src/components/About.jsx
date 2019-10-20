import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, visible];
}

const About = ({ about, setToggler, toggler }) => {
  const [ref, visible] = useOnScreen({ rootMargin: "0px" });
  return (
    <div className="about-container" ref={about}>
      <div>
        <h1>About me</h1>
        <div className="content" id="about-content">
          {/*<div><img className="profile-img" src="https://s3.amazonaws.com/image-urls/images/LinkedIn.jpg" alt="" /></div>*/}
          <div className="about">
            <p>
              I am a full-stack developer based in New York City with a
              background in music performance and music education. I have an
              affinity for problem solving, communication and detail oriented
              work. My passion for technology and people drives me to create the
              best possible experience for users and colleagues alike.
            </p>
            <p style={{ fontWeight: 300 }}>
              When I'm not working, you can find me going for hikes, cooking or
              playing music.
            </p>
            <div
              className="about-icon-container"
              ref={ref}
              style={{
                opacity: visible ? "1" : "0",
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "transform 500ms, opacity 500ms"
              }}
            >
              <img
                onClick={() => setToggler(!toggler)}
                className="about-icon"
                id="resume-icon"
                src="https://s3.amazonaws.com/image-urls/images/resume-icon-16.jpg"
                alt=""
              />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/danielgillen/"
              >
                <img
                  className="about-icon"
                  src="https://s3.amazonaws.com/image-urls/images/square-linkedin-512.png"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://github.com/dgillen27">
                <img
                  className="about-icon"
                  src="https://s3.amazonaws.com/image-urls/images/githubicon.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
