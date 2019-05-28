import React from 'react';
import Form from './form/form';
import styles from './style.scss';
import uuid from "uuid";

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

        let url = uuid.v4();

        fetch('/new',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                topic: this.state.roomName,
                uniqueUrl: url
            })
        })
        .then(response => console.log(response))
        // .then(json => console.log(json))
        .catch(error => console.log('Error: ', error))
        .then(window.location = `/room/${url}`)
    }

  render() {
    return (
       <div>

        <h1 className={styles.mainWrapper}>
            ASK A QUESTION
        </h1>
        <Form roomName={this.state.roomName} roomInput={this.handleRoomInput} submitRoom={this.handleRoomCreation} />

      </div>
    );
  }
}

export default Index;