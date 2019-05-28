import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Counter from './components/counter/counter';
import Form from './components/form/form';
import Room from './components/room/room';
import Index from './components/index/index';
import Vote from './components/vote/vote';
import Result from './components/result/result';


class App extends React.Component {

  render() {
    return (
      <div className={styles.appWrapper}>
            <Router>
                <Route exact path="/" component={Index} />
                <Route exact path="/room/:id" component={Room} />
                <Route exact path="/room/:id/vote" component={Vote} />
                <Route exact path="/room/:id/result" component={Result} />

            </Router>
      </div>

    );
  }
}

export default hot(module)(App);