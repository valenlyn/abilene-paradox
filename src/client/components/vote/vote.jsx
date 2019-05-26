import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './style.scss';
import DisplayOther from './displayother/displayother';
import DisplayOwn from './displayown/displayown';
import uuid from 'uuid';

class Vote extends React.Component {

    constructor(props){
        super();
        this.state = {
                    options: [],
                    ratings: [],
                    clickedOptionId: '',
                    optionInterestLevel: '',
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
    }

    interestChangeHandler = (e) => {
        this.setState({checkedRadio: true});
        this.setState({optionInterestLevel: e.target.value});
        this.setState({clickedOptionId: e.target.id});
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

    removeOptionFromState(optionId) {
        let options = this.state.options;
        let newOptions = [{...options}];
        var index = newOptions.findIndex(p => p.id === optionId);
        newOptions.splice(index, 1);
        this.setState({options: newOptions});
    }

    getRatings() {
        fetch(`/ratings/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
    }

    fetchOptions() {
        fetch(`/options/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({options:res})))
        .then( this.getRatings() )
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
                <DisplayOther options={this.state.options} ratedOptions={this.state.ratings} handleInterestChange={this.interestChangeHandler} checkedStatus={this.state.checkedRadio} clickedOptionId={this.state.clickedOptionId} whichIsChecked={this.state.optionInterestLevel} />
                <button onClick={this.refreshButtonHandler}>Refresh options</button>
                <DisplayOwn options={this.state.ratings} />
                <button>Next</button>
            </React.Fragment>

        )
    }
}


export default Vote;