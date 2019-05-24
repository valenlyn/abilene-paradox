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

        return (
          <div>
            <p>Topic: {this.state.topic}</p>
          </div>
        );
        }
    }

export default Room;