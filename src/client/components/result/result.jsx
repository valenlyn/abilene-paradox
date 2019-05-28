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

        let allRatings = [];
        let allOptionNames = [];
        let three = [];
        let two = [];
        let one = [];

        let match = [];

        let results = this.state.ratings.map((result, i) => {

            if (result.rating === 3) {
                three.push({name: result.option, id: result.id });
            } else if (result.rating === 2) {
                two.push({name: result.option, id: result.id})
            } else if (result.rating === 1) {
                one.push({name: result.option, id: result.id})
            }

            // allRatings.push(result.id);
            // allOptionNames.push(result.option);

            return <p key={i+1 * 33}> {result.option} {result.rating} </p>
        })


        // let getUnique = (id) => id.filter((v,i) => id.indexOf(v) === i);
        // let uniqueIds = getUnique(allRatings);
        // console.log("unique ids here " + uniqueIds);

        // let getUniqueNames = (name) => name.filter((v,i) => name.indexOf(v) === i);
        // let uniqueNames = getUniqueNames(allOptionNames);

        // console.log(uniqueNames);



        // let printUniqueNames = uniqueNames.map((item, i) => {
        //     return <p key={i+1 * 88}>{item}</p>
        // })

        // function countInArray(array, value) {
        //     return array.reduce((n, x) => n + (x === value), 0);
        // }


        let printThree = three.map((opt, i) => {
            return <p key={i+1 * 22} >{opt.name}</p>
        })

        let printTwo = two.map((opt, i) => {
            return <p key={i+1 * 44}>{opt.name}</p>
        })

        let printOne = one.map((opt, i) => {
            return <p key={i+1 * 909}>{opt.name}</p>
        })


        return (
            <React.Fragment>
                <Topic topic={this.state.topic} />

                <hr/>
                <br />
                😍
                <br/>
                {printThree}

                <br/>
                😊 <br/>
                {printTwo}

                <br/>
                🤮 <br/>
                {printOne}

            </React.Fragment>
        )
    }
}


export default Result;