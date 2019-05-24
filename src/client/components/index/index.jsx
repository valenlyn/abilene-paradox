import React from 'react';
import Form from '../form/form';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      userId: '',
      username: '',
      roomName: ''
    };
  }

    handleRoomInput = e => {
        console.log(e.target.value);
        let userRoomSubmission = e.target.value;
        this.setState({ roomName: userRoomSubmission });
    }

    handleRoomCreation = e => {

        fetch('/new',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.roomName,
            })
        })
        .then(response => console.log(response))
        // .then(json => console.log(json))
        .catch(error => console.log('Error: ', error))
        // .then(window.location = `/room/${document.cookie.split(';')[0]}`)
    }

    // Setting cookies for user when they first visit the page
    componentDidMount() {
        fetch(`/welcome`).then(res=>res.json().then(res=>this.setState({user_id:res.userCookie})));
    }

  render() {
    return (
       <div>

        <h1>Decide something rn BOITCHES</h1>
        <Form roomName={this.state.roomName} roomInput={this.handleRoomInput} submitRoom={this.handleRoomCreation} />

      </div>
    );
  }
}

export default Index;