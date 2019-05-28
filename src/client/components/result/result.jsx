import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Topic from '../general/topic/topic.jsx';
import uuid from 'uuid';

class Result extends React.Component {

    constructor(props) {
        super();
        this.state = {
                    ratings: [],
                    topic: '',
                    }

    this.routeParam = props.match.params.id;

    }

    getRatings() {
        fetch(`/ratingscore/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
        .then(res=>this.getRoomInfo() )
    }

    getRoomInfo() {
        fetch(`/roominfo/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({topic:res[0].topic})))
    }

    componentDidMount() {
        this.getRatings();
    }


    render() {


        return (
            <React.Fragment>
                <Topic topic={this.state.topic} />


            </React.Fragment>
        )
    }
}


export default Result;