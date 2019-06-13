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
    // fetch(`/new`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             topic: this.state.roomName,
    //             uniqueUrl: url,
    //             user: 0
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(response => console.log('Success:', JSON.stringify(response)))
    //     .catch(error => console.log('Error: ', error))
    //     .then(window.location = `/room/${url}`);

        fetch('/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    topic: this.state.roomName,
                    uniqueUrl: url,
                    user: 0
                })
            })
            .then(response => console.log(response))
            .then(json => console.log(json))
            .catch(error => console.log('Error: ', error))
            .then(window.location = `/room/${url}`);

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