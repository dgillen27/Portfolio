import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";

const Welcome = props => {
  const list = [
    <div className="first">Hey, I'm Dan Gillen!</div>,
    <div className="second">A Full Stack Developer</div>,
    <div onClick={props.goProjects} className="welcome-button">
      Check out my work
    </div>
  ];

  const [toggle, set] = useState(false);
  const config = { mass: 5, tension: 2000, friction: 200 };
  const options = {
    delay: 150,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? "auto" : 0,
    from: { opacity: 0, x: 20, height: 0 }
  };

  const trail = useTrail(list.length, {
    config,
    ...options
  });

  useEffect(() => {
    set(true);
  }, [set]);
  return (
    <div ref={props.welcome} className="welcome-container">
      <div className="welcome-cover">
        <div className="content" id="welcome-content">
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={index}
              style={{
                ...rest,
                transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
              }}
            >
              {list[index]}
            </animated.div>
          ))}
          {/* <div className="first">Hey, I'm Dan Gillen!</div>
          <div className="second">A Full Stack Developer</div>
          <div onClick={props.goProjects} className="welcome-button">
            Check out my work
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
