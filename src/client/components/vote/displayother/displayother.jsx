import React from 'react';
import styles from './style.scss';
import Interest from '../../room/interest/interest';

class DisplayOther extends React.Component {


    render() {

        let optionsToVote = this.props.options.map((option, i) => {
            return <div key={i+1 * 4} className={styles.optionWrapper}>
                    <span>{option.option}</span>
                    <Interest key={i * 100} id={option.id} veto={true} interestChangeHandler={this.props.interestChangeHandler} radioSelect={this.props.radioSelect} selectedValue={this.props.selectedValue} optionId={this.props.optionId} />
                    </div>;
        })

        return (
            <React.Fragment>
                <h1>OTHER PEOPLE'S OPTIONS I YET 2 RATE</h1>
                {optionsToVote}
            </React.Fragment>

        )
    }
}


export default DisplayOther;