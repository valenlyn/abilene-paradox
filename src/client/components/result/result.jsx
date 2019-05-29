import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Topic from '../general/topic/topic.jsx';
import BarChart from './barchart/barchart.jsx';
import ModalRandom from './modalRandom/modalRandom.jsx';

class Result extends React.Component {

    constructor(props) {
        super();
        this.state = {
                    ratings: [],
                    topic: '',
                    optionNames: [],
                    optionNamesOptimised: [],
                    options: [],
                    random: [],
                    ratingOneScore: [],
                    ratingTwoScore: [],
                    ratingThreeScore: [],
                    length: 0
                    }

        this.routeParam = props.match.params.id;
    }

    getOptionNames(){

        let arraySortByHighestScore = this.state.ratings;
        arraySortByHighestScore.sort(function(a, b) {
            return b.overallScore - a.overallScore;
        });

        let names = arraySortByHighestScore.map((option) => {

            this.setState({optionNames: [...this.state.optionNames, option.name]});
            this.setState({ratingOneScore: [...this.state.ratingOneScore, option.ratingOneScore]});
            this.setState({ratingTwoScore: [...this.state.ratingTwoScore, option.ratingTwoScore]});
            this.setState({ratingThreeScore: [...this.state.ratingThreeScore, option.ratingThreeScore]});
            this.setState({length: option.length})
        })

        let thanos = arraySortByHighestScore.splice(0, Math.ceil(arraySortByHighestScore.length / 2));
        let optionNamesOptimised = thanos.map((option) => {
            this.setState({optionNamesOptimised: [...this.state.optionNamesOptimised, option.name]});
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

    shuffle(array) {
        return array.shuffle()[0];
    }

    generateRandomHandler = e => {

        let random = [...this.state.optionNamesOptimised];
        let chosen = random.map((a) => ({sort: Math.random(), value: a}))
                            .sort((a, b) => a.sort - b.sort)
                            .map((a) => a.value);
        this.setState({random: chosen[0]});
        console.log(chosen)
    }

    componentDidMount() {
        this.getRatings();
    }


    render() {

        console.log(this.state.random)

        return (
            <React.Fragment>
                <Topic topic={this.state.topic} />

                <div className={styles.resultWrapper}>
                    <BarChart labels={this.state.optionNames} rateOne={this.state.ratingOneScore} rateTwo={this.state.ratingTwoScore} rateThree={this.state.ratingThreeScore} length={this.state.length} />

                <ModalRandom randomOption={this.state.random} generateRandomOption={this.generateRandomHandler} />

                </div>
            </React.Fragment>

        )
    }
}


export default Result;