import React from "react";

export default function Project({
  rightOrientation,
  projectRef,
  visible,
  projectImage,
  imagePositionLeft,
  projectLink,
  projectName,
  projectType,
  projectDescription,
  githubLink,
  icons
}) {
  if (rightOrientation)
    return (
      <div
        className="project"
        id="project-right"
        ref={projectRef}
        style={{
          opacity: visible ? "1" : "0",
          transform: visible ? "translateY(0)" : "translateY(30px)"
        }}
      >
        <div className="project-description" id="left-description">
          <a className="right-a" target="_blank" href={projectLink}>
            <div className="project-name">{projectName}</div>
          </a>
          <h2>{projectType}</h2>
          <h3>{projectDescription}</h3>
          <a className="small-link" target="_blank" href={projectLink}>
            Website
          </a>
          <br />
          <a className="small-link" target="_blank" href={githubLink}>
            Github
          </a>
          <br />
          <br />
          <div>Technologies used</div>
          {icons.map((icon, i) => (
            <img key={i} className="icon" src={icon} alt="" />
          ))}
        </div>
        <a target="_blank" href={projectLink}>
          <div
            className={
              imagePositionLeft
                ? "project-image background-position-left"
                : "project-image"
            }
            style={{ backgroundImage: `url(${projectImage})` }}
          ></div>
        </a>
      </div>
    );
  else
    return (
      <div
        className="project"
        id="project-left"
        ref={projectRef}
        style={{
          opacity: visible ? "1" : "0",
          transform: visible ? "translateY(0)" : "translateY(30px)"
        }}
      >
        <a target="_blank" href={projectLink}>
          <div
            className={
              imagePositionLeft
                ? "project-image background-position-left"
                : "project-image"
            }
            style={{ backgroundImage: `url(${projectImage})` }}
          ></div>
        </a>
        <div className="project-description" id="right-description">
          <a target="_blank" href={projectLink}>
            <div className="project-name">{projectName}</div>
          </a>
          <h2>{projectType}</h2>
          <h3>{projectDescription}</h3>
          <a className="small-link" target="_blank" href={projectLink}>
            Website
          </a>
          <br />
          <a className="small-link" target="_blank" href={githubLink}>
            Github
          </a>
          <br />
          <br />
          <div>Technologies used</div>
          {icons.map((icon, i) => (
            <img key={i} className="icon" src={icon} alt="" />
          ))}
        </div>
      </div>
    );
}
