import React from 'react';
import styles from './style.scss';

class Interest extends React.Component {


    render() {

        let radio1;
        let radio2;
        let radio3;
        let vetoRadio;

        if (this.props.veto) {
            vetoRadio = (<React.Fragment><input type="radio" id={this.props.id} name="input" value="1" onChange={this.props.interestChangeHandler} checked={radio1} /> 🤮</React.Fragment>)
        } else {
            vetoRadio = '';
        }

        if (this.props.checked && this.props.whichIsChecked === "2") {
            radio2 = true;
        } else if (this.props.checked && this.props.whichIsChecked === "3") {
            radio3 = true;
        } else {
            radio2 = false;
            radio3 = false;
        }


        return (
          <div className={styles.interest}>

            {vetoRadio}
            <input type="radio" id={this.props.id} name="input" value="2" onChange={this.props.interestChangeHandler} checked={radio2} /> 😊
            <input type="radio" id={this.props.id} name="input" value="3" onChange={this.props.interestChangeHandler} checked={radio3} /> 😍

          </div>
        );
        }
    }

export default Interest;