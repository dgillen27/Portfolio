import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import OpenMenu from "./components/OpenMenu";
import Cover from "./components/Cover";
import FsLightbox from "fslightbox-react";

function App() {
  const projects = React.createRef();
  const contact = React.createRef();
  const about = React.createRef();
  const welcome = React.createRef();
  const ref1 = React.createRef();

  const [showClass, setShowClass] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [show, setShow] = useState(false);
  const [toggler, setToggler] = useState(false);

  const goProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const goContact = () => {
    contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goAbout = () => {
    about.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goWelcome = () => {
    welcome.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  const changeClass = () => {
    setShowClass(!showClass);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop !== 0) {
        setIsTop(true);
      } else if (isTop === 0) {
        setIsTop(false);
      }
    });
  }, [setIsTop]);
  return (
    <div className="App">
      <Header
        isTop={isTop}
        goProjects={goProjects}
        goAbout={goAbout}
        goContact={goContact}
        goWelcome={goWelcome}
        changeClass={changeClass}
      />
      {showClass && <Cover />}
      <Welcome welcome={welcome} goProjects={goProjects} />
      <OpenMenu
        goProjects={goProjects}
        goAbout={goAbout}
        goContact={goContact}
        goWelcome={goWelcome}
        changeClass={changeClass}
        showClass={showClass}
      />
      <Projects ref1={ref1} projects={projects} />
      <About about={about} setToggler={setToggler} toggler={toggler} />
      <Contact contact={contact} />
      <FsLightbox
        toggler={toggler}
        sources={["https://i.imgur.com/Sgp7OB1.jpg"]}
      />
    </div>
  );
}

export default withRouter(App);
