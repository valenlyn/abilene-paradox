import React from 'react';
import styles from './style.scss';

class DisplayOwn extends React.Component {

    render() {

        let myOptions = this.props.options.filter(function (details) {
            return details.user_id === localStorage.getItem('user_id');
        });

        myOptions = myOptions.map((option, i) => {

            let optionSymbol;
            if (option.rating === 3) {
                optionSymbol = "😍";
            } else if (option.rating === 2) {
                optionSymbol = "😊";
            } else if (option.rating === 1) {
                optionSymbol = "🤮";
            }

            return <p id={option.id} key={i+1 * 66}>{option.option} {optionSymbol}</p>
        })

        return (
            <React.Fragment>
                <h1>OPTIONS I HAVE RATED</h1>
                {myOptions}
            </React.Fragment>
        )
    }
}


export default DisplayOwn;