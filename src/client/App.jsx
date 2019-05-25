import React from 'react';
import { hot } from 'react-hot-loader';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Counter from './components/counter/counter';
import Form from './components/form/form';
import Room from './components/room/room';
import Index from './components/index/index';
import Vote from './components/vote/vote';


class App extends React.Component {

  render() {
    return (
      <div>

        <Router>
            <Route exact path="/" component={Index} />
            <Route exact path="/room/:id" component={Room} />
            <Route path="/room/:id/vote" component={Vote} />
        </Router>

      </div>
    );
  }
}

export default hot(module)(App);