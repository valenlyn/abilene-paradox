import 'babel-polyfill';
import 'airbnb-browser-shims';

import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Room from './components/room/room';

// global styles
import './style.scss';

// create multiple routes
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/room/:id" component={Room} params={this.props.match.params.id}/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app'));