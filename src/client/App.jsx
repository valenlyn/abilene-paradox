import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      user_id: ''
    };

  }

    componentDidMount() {
        fetch(`/welcome`).then(res=>res.json().then(res=>this.setState({user_id:res.userCookie})));
    }


  render() {
    return (
      <div>
        <h1>Decide something rn</h1>
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);