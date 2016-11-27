import React from 'react';
import '../css/bars.css';
import {Link, IndexLink} from "react-router";
import {store, login} from "../shared-state.js";
import md5 from "md5";

export class Navbar extends React.Component {
  render() {
    return (
      <div id="Navbar" className="bar">
        <button><IndexLink to="/" activeClassName="active">Home</IndexLink></button>
        <button><Link to="/projects" activeClassName="active">Projects</Link></button>
        <button><Link to="/resume" activeClassName="active">Resume</Link></button>
        <button><Link to="/blog" activeClassName="active">Blog</Link></button>
      </div>
    );
  }
}

export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  componentDidMount() {
    this.setState({
      loginPrompt: false
    })
  }

  scrollToTop(event) {
    window.scrollTo(0,0);
  }

  login(event) {
    this.setState({ loginPrompt : !this.state.loginPrompt});
  }
  
  render() {
    var login;

    if(this.state && this.state.loginPrompt) {
      login = <LogIn></LogIn>;
    } else {
      login = null;
    }

    return (
      <div id="Footer" className="bar">
        <div id="toTop" onClick={event => this.scrollToTop(event)}>
            go to <icon className="fa fa-angle-double-up" aria-hidden="true"></icon>
        </div>

        <div onClick={event => this.login(event)}
          className="fa fa-sign-in" aria-hidden="true"></div>

          {login}
      </div>
    );
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="log-in">
        <form id="login-form">
          <input type="text" placeholder="username" name="user"></input>
          <input type="password" placeholder="password" name="pass"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}