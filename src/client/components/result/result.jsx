import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Topic from '../general/topic/topic.jsx';
import BarChart from './barchart/barchart.jsx';

class Result extends React.Component {

    constructor(props) {
        super();
        this.state = {
                    ratings: [],
                    topic: '',
                    optionNames: [],
                    options: [],
                    ratingOneScore: [],
                    ratingTwoScore: [],
                    ratingThreeScore: [],
                    length: 0
                    }

        this.routeParam = props.match.params.id;
    }

    getOptionNames(){

        let names = this.state.ratings.map((option) => {
            console.log(option.name)
            this.setState({optionNames: [...this.state.optionNames, option.name]});
            this.setState({ratingOneScore: [...this.state.ratingOneScore, option.ratingOneScore]});
            this.setState({ratingTwoScore: [...this.state.ratingTwoScore, option.ratingTwoScore]});
            this.setState({ratingThreeScore: [...this.state.ratingThreeScore, option.ratingThreeScore]});
            this.setState({length: option.length})
        })
    }

    getRatings() {
        fetch(`/ratingscore/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
        .then(res=>this.getRoomInfo() )
        .then(res=>this.getOptionNames() )
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

                <div className={styles.resultWrapper}>
                    <BarChart labels={this.state.optionNames} rateOne={this.state.ratingOneScore} rateTwo={this.state.ratingTwoScore} rateThree={this.state.ratingThreeScore} length={this.state.length} />

                    <button>I don't care. Get random option.</button>
                </div>
            </React.Fragment>

        )
    }
}


export default Result;