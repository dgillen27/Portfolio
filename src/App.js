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

// class App extends Component {
//   constructor() {
//     super();
//     this.projects = React.createRef();
//     this.contact = React.createRef();
//     this.about = React.createRef();
//     this.welcome = React.createRef();
//     this.ref1 = React.createRef();

//     this.goProjects = this.goProjects.bind(this);
//     this.goContact = this.goContact.bind(this);
//     this.goAbout = this.goAbout.bind(this);
//     this.goWelcome = this.goWelcome.bind(this);
//     this.changeClass = this.changeClass.bind(this);
//     this.showItem = this.showItem.bind(this);
//     this.changeRef = this.changeRef.bind(this);

//     this.state = {
//       showClass: false,
//       isTop: false,
//       show: false
//     };
//   }

//   goProjects() {
//     this.projects.current.scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     });
//   }

//   goContact() {
//     this.contact.current.scrollIntoView({ behavior: "smooth", block: "start" });
//   }

//   goAbout() {
//     this.about.current.scrollIntoView({ behavior: "smooth", block: "start" });
//   }

//   goWelcome() {
//     this.welcome.current.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//       inline: "nearest"
//     });
//   }

//   changeClass() {
//     const { showClass } = this.state;
//     this.setState({
//       showClass: showClass === true ? false : true
//     });
//   }

//   showItem() {
//     const project = document.querySelector(".project");
//     const value = project.getBoundingClientRect();
//     if (value.top > window.scrollY) {
//       console.log(value.top);
//       this.setState({
//         show: true
//       });
//     }
//   }

//   componentDidMount() {
//     document.addEventListener("scroll", () => {
//       const isTop = window.scrollY;
//       if (isTop !== 0) {
//         this.setState({ isTop: true });
//       } else if (isTop === 0) {
//         this.setState({ isTop: false });
//       }
//     });
//   }

//   render() {
//     const { showClass, isTop } = this.state;
//     return (
//       <div className="App">
//         <Header
//           isTop={isTop}
//           goProjects={this.goProjects}
//           goAbout={this.goAbout}
//           goContact={this.goContact}
//           goWelcome={this.goWelcome}
//           changeClass={this.changeClass}
//         />
//         {showClass && <Cover />}
//         <Welcome welcome={this.welcome} goProjects={this.goProjects} />
//         <OpenMenu
//           goProjects={this.goProjects}
//           goAbout={this.goAbout}
//           goContact={this.goContact}
//           goWelcome={this.goWelcome}
//           changeClass={this.changeClass}
//           showClass={showClass}
//         />
//         <Projects ref1={this.ref1} projects={this.projects} />
//         <About about={this.about} />
//         <Contact contact={this.contact} />
//       </div>
//     );
//   }
// }

function App() {
  const projects = React.createRef();
  const contact = React.createRef();
  const about = React.createRef();
  const welcome = React.createRef();
  const ref1 = React.createRef();

  const [showClass, setShowClass] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [show, setShow] = useState(false);

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
      <About about={about} />
      <Contact contact={contact} />
    </div>
  );
}

export default withRouter(App);
