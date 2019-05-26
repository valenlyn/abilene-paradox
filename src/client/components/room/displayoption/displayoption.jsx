import React from 'react';
import styles from './style.scss';

class DisplayOption extends React.Component {


    render() {

        console.log(this.props.options);
        let display = this.props.options.map((option, i) => {

            let optionSymbol;
            if (option.optionInterest === "3") {
                optionSymbol = "😍";
            } else if (option.optionInterest === "2") {
                optionSymbol = "😊";
            }
            return <p key={i}>{option.optionName} {optionSymbol}</p>
        })

        return (

            <div className={styles.displayWrapper}>
                {display}
            </div>

        )
    }
}


export default DisplayOption;