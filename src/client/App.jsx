import React from 'react';
import { hot } from 'react-hot-loader';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Counter from './components/counter/counter';
import Form from './components/form/form';
import Room from './components/room/room';
import Index from './components/index/index';

class App extends React.Component {

  render() {
    return (
      <div>

        <Router>
            <Route exact path="/" component={Index} />
            <Route path="/room/:id" component={Room} />
        </Router>

      </div>
    );
  }
}

export default hot(module)(App);