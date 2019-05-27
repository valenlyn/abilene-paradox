import React from 'react';
import styles from './style.scss';

class DisplayOption extends React.Component {


    render() {

        let display = this.props.options.map((option, i) => {

            let optionSymbol;
            if (option.rating === 3) {
                optionSymbol = "😍";
            } else if (option.rating === 2) {
                optionSymbol = "😊";
            } else if (option.rating === 1) {
                optionSymbol = "🤮";
            }
            return (

                <div key={i+1 * 8} className={styles.optionCard}>
                    <div key={i +1} className={styles.optionCardText}>
                        {option.option}
                    </div>
                    <div key={i+100 * 7} className={styles.optionCardSymbol}>
                        {optionSymbol}
                    </div>
                </div>
            )
        })

        return (

            <div className={styles.displayWrapper}>
              {display}
            </div>

        )
    }
}


export default DisplayOption;