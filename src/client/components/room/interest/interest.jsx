import React from 'react';
import styles from './style.scss';

class Interest extends React.Component {


    render() {

        let vetoRadio;



        if (this.props.veto) {
            console.log("------inside veto-----")

            console.log(this.props.id)
            console.log(parseInt(this.props.optionId))

            vetoRadio = (
                <React.Fragment>
                    <input
                        type="radio"
                        id={this.props.id}
                        name={this.props.id}
                        value="1"
                        onChange={this.props.interestChangeHandler}
                        checked={this.props.selectedValue === "1" && this.props.radioSelect && this.props.optionId === this.props.id}
                    />
                        🤮
                </React.Fragment>
            )
        } else {
            vetoRadio = '';
        }

        return (
          <div className={styles.interest}>

                {vetoRadio}

                <input
                    type="radio"
                    id={this.props.id}
                    name={this.props.id}
                    value="2"
                    onChange={this.props.interestChangeHandler}
                    checked={this.props.selectedValue === "2"  && this.props.radioSelect && this.props.optionId === this.props.id }
                />

                    😊

                <input
                    type="radio"
                    id={this.props.id}
                    name={this.props.id}
                    value="3"
                    onChange={this.props.interestChangeHandler}
                    checked={this.props.selectedValue === "3"  && this.props.radioSelect && this.props.optionId === this.props.id}
                    />

                    😍

          </div>
        );
        }
    }

export default Interest;