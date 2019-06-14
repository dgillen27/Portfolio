import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
import OpenMenu from './components/OpenMenu';
import Cover from './components/Cover'

class App extends Component {
  constructor(){
    super();
    this.projects = React.createRef();
    this.contact = React.createRef();
    this.about = React.createRef();
    this.welcome = React.createRef();

    this.goProjects = this.goProjects.bind(this);
    this.goContact = this.goContact.bind(this);
    this.goAbout = this.goAbout.bind(this);
    this.goWelcome = this.goWelcome.bind(this);
    this.changeClass = this.changeClass.bind(this);

    this.state = {
      showClass: false,
    }
  }

  goProjects() {
    this.projects.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  goContact() {
    this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goAbout() {
    this.about.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  goWelcome() {
    this.welcome.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" })
  }

  changeClass() {
    const { showClass } = this.state;
    this.setState({
      showClass: showClass === true? false: true
    })
  }

  render() {
    const { showClass } = this.state
    return (
      <div className="App">
        <Header
          goProjects={this.goProjects}
          goAbout={this.goAbout}
          goContact={this.goContact}
          goWelcome={this.goWelcome}
          changeClass={this.changeClass}/>
        { showClass && <Cover />}
        <Welcome
          welcome={this.welcome}
          goProjects={this.goProjects}/>
        { showClass && <OpenMenu
          goProjects={this.goProjects}
          goAbout={this.goAbout}
          goContact={this.goContact}
          goWelcome={this.goWelcome}
          changeClass={this.changeClass}
          showClass={showClass}/>}
        <Projects
          projects={this.projects}/>
        <About
          about={this.about}/>
        <Contact
          contact={this.contact}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
