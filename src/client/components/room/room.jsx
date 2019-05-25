import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';

class Room extends React.Component {

    constructor(props) {
        super();
        this.state = {
            topic: ''
        }

        this.routeParam = props.match.params.id;

        console.log("param here " + this.routeParam);

        fetch(`/roominfo/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({topic:res[0].topic})));
    }

    render() {

        let invitationMessage = this.state.topic + " Let's decide!";
        let roomUrl = `/room/${this.routeParam}`;
        let whatsAppLink = `https://wa.me/?text=${roomUrl} %0A ${invitationMessage}`;
        let telegramLink = `https://telegram.me/share/url?url=${roomUrl}&text=${invitationMessage}`

        return (
          <div>
            <p>Topic: {this.state.topic}</p>
            <p><a href={whatsAppLink} target="_blank" rel="noopener noreferrer">Share to WhatsApp</a></p>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">Share to Telegram</a>

          </div>
        );
        }
    }

export default Room;