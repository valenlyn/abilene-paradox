import React from 'react';
import Form from './form/form';
import Description from './description/description';
import styles from './style.scss';
import uuid from "uuid";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      username: '',
      roomName: ''
    };
  }

    handleRoomInput = e => {
        let userRoomSubmission = e.target.value;
        this.setState({ roomName: userRoomSubmission });
    }

    handleRoomCreation = e => {
        e.preventDefault();
        let url = uuid.v4();
        this.sendTopicAndUrl(url);
    }

    sendTopicAndUrl(url) {
        (async () => {
            let response = await fetch('/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    topic: this.state.roomName,
                    uniqueUrl: url,
                    user: 0
                })
            })

            let result = await response.json();
             // alert(result.message);
            let ok = await response.ok
                if (response.ok) {
                    window.location = (`/room/${url}`)
                }
        })();


    }

  render() {

    return (
       <div>
            <h1 className={`${styles.mainWrapper}`}>
                ASK A QUESTION
            </h1>
            <div className={`${styles.inputSubmitWrapper}`}>
                <Form roomName={this.state.roomName} roomInput={this.handleRoomInput} submitRoom={this.handleRoomCreation} />
            </div>
      </div>
    );
  }
}

export default Index;