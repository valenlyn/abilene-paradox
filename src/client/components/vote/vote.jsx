import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './style.scss';
import DisplayOther from './displayother/displayother';
import DisplayOption from '../room/displayoption/displayoption';
import Topic from '../general/topic/topic';
import uuid from 'uuid';

class Vote extends React.Component {

    constructor(props){
        super();
        this.state = {
                    topic: '',
                    options: [],
                    ratings: [],
                    optionsToVote: [],
                    optionsVoted: [],
                    ratingType: '',
                    selectedOptionId: '',
                    checkedRadio: false,
                    }
        this.routeParam = props.match.params.id;
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
        fetch(`https://polar-anchorage-88057.herokuapp.com/vote/${this.routeParam}`,{
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

        fetch(`https://polar-anchorage-88057.herokuapp.com/ratings/${this.routeParam}`)
        .then(res=>res.json()
        // .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
        .then(res=>this.getOptionsToVote() )
    }

    fetchOptions() {

        fetch(`https://polar-anchorage-88057.herokuapp.com/options/${this.routeParam}`)
        .then(res=>res.json()
        // .then(console.log(res))
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
    redirectButtonHandler = (e) => {
        window.location = `https://polar-anchorage-88057.herokuapp.com/room/${this.routeParam}/result`;
    }

    componentDidMount() {
        this.fetchOptions();
        this.setLocalStorageUserId();

        fetch(`https://polar-anchorage-88057.herokuapp.com/roominfo/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({topic:res[0].topic})));
    }

    render() {


        let optionsUserHasVoted = this.state.ratings.filter(function (optionRated) {
            return optionRated.user_id === localStorage.getItem('user_id');
        });



        let optionsUserHasNotVoted = this.state.options.filter(function (option) {
            return option.user_id !== localStorage.getItem('user_id') && option.option !== "";
        });


        optionsUserHasNotVoted = optionsUserHasNotVoted.filter(function(cv) {
            return !optionsUserHasVoted.find(function(e){
                return e.id == cv.id;
            })
        })

        return (

            <React.Fragment>
                <Topic topic={this.state.topic} />

                <div className={styles.nextButtonWrapper}>
                    <button onClick={this.redirectButtonHandler}>Next</button>
                </div>


                <button className={styles.refreshButton} onClick={this.refreshButtonHandler}>
                    <i className="material-icons">refresh</i> Fetch new options
                </button>

                <DisplayOther options={optionsUserHasNotVoted} interestChangeHandler={this.interestChangeHandler} radioSelect={this.state.checkedRadio} selectedValue={this.state.ratingType} optionId={this.state.selectedOptionId} />

                <DisplayOption options={optionsUserHasVoted} />
            </React.Fragment>

        )
    }
}


export default Vote;