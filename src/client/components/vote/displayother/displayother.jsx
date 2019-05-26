import React from 'react';
import styles from './style.scss';
import Interest from '../../room/interest/interest';
import uuid from 'uuid';

class DisplayOther extends React.Component {

    constructor(){
        super();
    }

    render() {

        console.log(this.props.checkedStatus);
        console.log(this.props.clickedOptionId);
        console.log(this.props.whichIsChecked);

        let allRatedOptions = this.props.ratedOptions.filter(function (optionRated) {
            return optionRated.user_id === localStorage.getItem('user_id');
        });

        let otherOptions = this.props.options.filter(function (option) {
            return option.user_id !== localStorage.getItem('user_id') && option.option !== "";
        });

        otherOptions = otherOptions.filter(function(cv) {
            return !allRatedOptions.find(function(e){
                return e.id == cv.id;
            })
        })

        otherOptions = otherOptions.map((option, i) => {
            return (<div key={i+1 * 4} className={styles.optionWrapper}>
                <span key={i+1 * 2}>{option.option}</span>

                <Interest key={i+1 * 3} id={option.id} veto={true} interestChangeHandler={this.props.handleInterestChange} checkedStatus={this.props.checkedStatus} clickedOptionId={this.props.clickedOptionId} whichIsChecked={this.props.whichIsChecked} />

                </div>
            )
        })

        return (
            <React.Fragment>
                <h1>OTHER PEOPLE'S OPTIONS I YET 2 RATE</h1>
                {otherOptions}
            </React.Fragment>

        )
    }
}


export default DisplayOther;