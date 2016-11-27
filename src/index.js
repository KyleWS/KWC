import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import HomePage from "./components/HomePage.js";
import ResumePage from "./components/ResumePage.js";
import ProjectPage from "./components/ProjectPage.js";
import BlogPage from "./components/BlogPage.js";
import './css/main.css';

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}></IndexRoute>
            <Route path="/projects" component={ProjectPage}> </Route>
            <Route path="/resume" component={ResumePage}> </Route>
            <Route path="/blog" component={BlogPage}> </Route>
        </Route>
    </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
