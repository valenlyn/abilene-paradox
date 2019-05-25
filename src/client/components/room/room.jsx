import React from 'react';
import styles from './style.scss';
import {withRouter} from 'react-router-dom';
import Option from './option/option.jsx';
import Interest from './interest/interest.jsx';
import Submit from './submit/submit.jsx';
import AddAnother from './addanother/addanother.jsx'
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
            rowsArray: [],
            newRow: false
        }

        this.routeParam = props.match.params.id;
        console.log(this.routeParam);

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
    }

    optionSubmitHandler = (e) => {
        fetch(`/room/${this.routeParam}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                room_id: this.routeParam,
                user_id: localStorage.getItem('user_id'),
                options: this.state.current.optionName,
                optionsInterest: this.state.current.optionInterest
            })
        })
        .then(response => console.log(response))
        .then(json => console.log(json))
        .catch(error => console.log('Error: ', error))
    }

    addAnotherHandler = (e) => {
        this.setState({ rowsArray: [...this.state.rowsArray, "component"]});
    }

    renderRows = () => {

        return (
        this.state.rowsArray.map(row => <React.Fragment>
            <Option optionValue={this.state.newOption} optionInputHandler={this.inputChangeHandler}/>
            <Interest interestChangeHandler={this.interestChangeHandler} />
            <AddAnother addAnother={this.addAnotherHandler} />
            </React.Fragment>)
        )
    }

    componentDidMount(){
        this.setLocalStorageUserId();
    }

    render() {

        let invitationMessage = this.state.topic + " Let's decide!";
        let roomUrl = `/room/${this.routeParam}`;
        let whatsAppLink = `https://wa.me/?text=${roomUrl} %0A ${invitationMessage}`;
        let telegramLink = `https://telegram.me/share/url?url=${roomUrl}&text=${invitationMessage}`



        return (
          <React.Fragment>
              <div>
                <p>Topic: {this.state.topic}</p>
                <p><a href={whatsAppLink} target="_blank" rel="noopener noreferrer">Share to WhatsApp</a></p>
                <a href={telegramLink} target="_blank" rel="noopener noreferrer">Share to Telegram</a>
              </div>

            <Option optionValue={this.state.newOption} optionInputHandler={this.inputChangeHandler}/>
            <Interest interestChangeHandler={this.interestChangeHandler}/>
            <AddAnother addAnother={this.addAnotherHandler} />

            { this.state.newRow && <><Option optionValue={this.state.newOption} optionInputHandler={this.inputChangeHandler}/> <Interest interestChangeHandler={this.interestChangeHandler} /> <AddAnother addAnother={this.addAnotherHandler} /></> }

            {this.renderRows()}


            <hr/>
            <Submit submitOption={this.optionSubmitHandler} />

          </React.Fragment>
        );
        }
    }

export default Room;