import React from 'react';
import styles from './style.scss';
import Interest from '../../room/interest/interest';

class DisplayOther extends React.Component {


    render() {


        let optionsToVote = this.props.options.map((option, i) => {
            return <div key={i+1 * 4} className={styles.optionWrapper}>
                    <span key={i+1 * 88}>{option.option}</span>
                    <Interest key={i * 100} id={option.id} veto={true} interestChangeHandler={this.props.interestChangeHandler} radioSelect={this.props.radioSelect} selectedValue={this.props.selectedValue} optionId={this.props.optionId} />
                    </div>;
        })

        // if (!this.props.options.first) {
        //     optionsToVote = "No pending options to vote..."
        // }

        return (
            <div className={styles.displayOtherWrapper}>
                {optionsToVote}
            </div>

        )
    }
}


export default DisplayOther;