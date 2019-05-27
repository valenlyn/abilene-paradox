import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './style.scss';
import DisplayOther from './displayother/displayother';
import DisplayOption from '../room/displayoption/displayoption';
import DisplayOwn from './displayown/displayown';
import uuid from 'uuid';

class Vote extends React.Component {

    constructor(props){
        super();
        this.state = {
                    options: [],
                    ratings: [],
                    optionsToVote: [],
                    optionsVoted: [],
                    ratingType: '',
                    selectedOptionId: 0,
                    checkedRadio: false,
                    }
        this.routeParam = props.match.params.id;
        this.setLocalStorageUserId();
    }

    setLocalStorageUserId(){
        let userId = uuid.v4();

        if (localStorage.getItem('user_id')) {
            return;
        } else {
            localStorage.setItem('user_id', userId);
        }

        this.setState({userId: userId});
    }

    interestChangeHandler = (e) => {
        let optionIdNumber = parseInt(e.target.id);
        this.setState({checkedRadio: true});
        this.setState({ratingType: e.target.value});
        this.setState({selectedOptionId: optionIdNumber});
        this.sendVotePostRequest(e.target.id, e.target.value);
    }

    sendVotePostRequest(optionId, optionInterest) {
        fetch(`/vote/${this.routeParam}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room_id: this.routeParam,
                option_id: optionId,
                optionInterest: optionInterest,
                user_id: localStorage.getItem('user_id')
            })
        })
        .then(response => console.log(response))
        .then(json => console.log(json))
        .then(this.fetchOptions())
        .catch(error => console.log('Error: ', error))
    }

    // removeOptionFromState(optionId) {
    //     let options = this.state.options;
    //     let newOptions = [{...options}];
    //     var index = newOptions.findIndex(p => p.id === optionId);
    //     newOptions.splice(index, 1);
    //     this.setState({options: newOptions});
    // }

    getRatings() {
        console.log("getting options--rated");
        fetch(`/ratings/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
        .then(res=>this.getOptionsToVote() )
    }

    fetchOptions() {
        console.log("getting options")
        fetch(`/options/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({options:res})))
        .then(res=> this.getRatings() )
    }

    getOptionsToVote(){

        let optionsUserHasVoted = this.state.ratings.filter(function (optionRated) {
            return optionRated.user_id === localStorage.getItem('user_id');
        });

        this.setState({optionsVoted: optionsUserHasVoted});

        let optionsUserHasNotVoted = this.state.options.filter(function (option) {
            return option.user_id !== localStorage.getItem('user_id') && option.option !== "";
        });


        optionsUserHasNotVoted = optionsUserHasNotVoted.filter(function(cv) {
            return !optionsUserHasVoted.find(function(e){
                return e.id == cv.id;
            })
        })

        this.setState({optionsToVote: optionsUserHasNotVoted});
    }

    refreshButtonHandler = (e) => {
        this.fetchOptions();
    }

    componentDidMount() {
        this.fetchOptions();
    }

    render() {

        return (

            <React.Fragment>
                <h1>It's time to vote 🤠</h1>
                <DisplayOther options={this.state.optionsToVote} interestChangeHandler={this.interestChangeHandler} radioSelect={this.state.checkedRadio} selectedValue={this.state.ratingType} optionId={this.state.selectedOptionId} />
                <button onClick={this.refreshButtonHandler}>Refresh options</button>
                <DisplayOption options={this.state.ratings} />
                <button>Next</button>
            </React.Fragment>

        )
    }
}


export default Vote;