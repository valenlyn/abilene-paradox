import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Topic from '../general/topic/topic.jsx';

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
        fetch(`/ratings/${this.routeParam}`)
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

        let options = [];

        let results = this.state.ratings.map((result, i) => {


            options.push({id: result.id, option: result.option})


            return <p key={i+1 * 33}> {result.option} {result.rating} </p>
        })

        console.log("---uniq opts---")
        console.log(options);
        console.log("---u----------")

        return (
            <React.Fragment>
                <Topic topic={this.state.topic} />
            </React.Fragment>
        )
    }
}


export default Result;