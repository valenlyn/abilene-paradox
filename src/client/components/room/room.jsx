import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Topic from '../general/topic/topic.jsx';
import Option from './option/option.jsx';
import Interest from './interest/interest.jsx';
import Submit from './submit/submit.jsx';
import AddAnother from './addanother/addanother.jsx';
import DisplayOption from './displayoption/displayoption.jsx'
import Share from '../share/share.jsx'
import uuid from "uuid";

class Room extends React.Component {

    constructor(props) {
        super();
        this.state = {
            topic: '',
            current: {
                    optionName: '',
                    optionInterest: '',
                },
            options: [],
            ratings: [],
            optionsVoted: [],
            checkedRadio: false,
            selectedValue: ''
        }

        this.routeParam = props.match.params.id;

        fetch(`/roominfo/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({topic:res[0].topic})));

    }

    setLocalStorageUserId(){
        let userId = uuid.v4();

        if (localStorage.getItem('user_id')) {
            return;
        } else {
            localStorage.setItem('user_id', userId);
        }
    }

    inputChangeHandler = (e) => {
        this.setState({current: {...this.state.current, optionName: e.target.value}});
        console.log(e.target.value)
    }

    interestChangeHandler = (e) => {
        this.setState({current: {...this.state.current, optionInterest: e.target.value}});
        this.setState({checkedRadio: true})
        this.setState({selectedValue: e.target.value});
    }

    optionSubmitHandler = (e) => {
        // this.sendOptionsPostRequest();
        window.location = `/room/${this.routeParam}/vote`;
    }

    sendOptionsPostRequest(){
        fetch(`/room/${this.routeParam}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room_id: this.routeParam,
                user_id: localStorage.getItem('user_id'),
                option: this.state.current.optionName,
                optionInterest: this.state.current.optionInterest
            })
        })
        .then(response => console.log(response))
        .then(response=> this.getRatings())
        .then(json => console.log(json))
        .catch(error => console.log('Error: ', error))
    }

    addAnotherHandler = (e) => {
        this.sendOptionsPostRequest();
        // this.setState({ options: [...this.state.options, this.state.current]});
        this.setState({ current: {
                    optionName: '',
                    optionInterest: '',
                }});
        this.setState({ checkedRadio: false });
    }

    getRatings() {
        fetch(`/ratings/${this.routeParam}`)
        .then(res=>res.json()
        .then(console.log(res))
        .then(res=>this.setState({ratings:res})))
        .then(res=>this.displayOptionsByUser() )
    }

    displayOptionsByUser() {
        let optionsUserHasVoted = this.state.ratings.filter(function (optionRated) {
            return optionRated.user_id === localStorage.getItem('user_id');
        });

        this.setState({optionsVoted: optionsUserHasVoted});
    }

    componentDidMount(){
        this.setLocalStorageUserId();
        this.getRatings();
    }

    render() {

        let invitationMessage = this.state.topic + " Let's decide!";
        let roomUrl = `/room/${this.routeParam}`;
        let whatsAppLink = `https://wa.me/?text=${roomUrl} %0A ${invitationMessage}`;
        let telegramLink = `https://telegram.me/share/url?url=${roomUrl}&text=${invitationMessage}`

        return (
          <React.Fragment>
              <div>
                <Topic topic={this.state.topic} />
              </div>


              <div className={styles.shareNextButton}>
                <Share whatsAppLink={whatsAppLink} telegramLink={telegramLink} />
                <Submit submitOption={this.optionSubmitHandler} />
              </div>


              <div className={styles.inputWrapper}>
                <Option optionValue={this.state.current.optionName} optionInputHandler={this.inputChangeHandler} />

                <div className={styles.optionsBelowTextInput}>
                    <Interest interestChangeHandler={this.interestChangeHandler} radioSelect={this.state.checkedRadio} selectedValue={this.state.selectedValue} id={this.state.selectedValue} optionId={this.state.selectedValue} />
                    <AddAnother addAnother={this.addAnotherHandler} />
                </div>

            </div>

            <DisplayOption options={this.state.optionsVoted} />


          </React.Fragment>
        );
        }
    }

export default Room;