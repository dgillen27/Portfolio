import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Welcome from './components/Welcome'

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

  render() {
    return (
      <div className="App">
        <Header
          goProjects={this.goProjects}
          goAbout={this.goAbout}
          goContact={this.goContact}
          goWelcome={this.goWelcome}/>
        <Welcome
          welcome={this.welcome}
          goProjects={this.goProjects}/>
        <About
          about={this.about}/>
        <Projects
          projects={this.projects}/>
        <Contact
          contact={this.contact}/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
