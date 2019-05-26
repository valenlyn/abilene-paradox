import React from 'react';
import styles from './style.scss';

class Interest extends React.Component {


    render() {

        let vetoRadio;

        console.log(this.props.checkedStatus);
        console.log("bob", this.props.id);
        console.log("bob",this.props.clickedOptionId);
        console.log("bob",this.props.whichIsChecked);


        if (this.props.veto) {
            vetoRadio = (<React.Fragment><input type="radio" id={this.props.id} name={this.props.id} value="1" onChange={this.props.interestChangeHandler} checked={this.props.whichIsChecked === 1 && this.props.clickedOptionId === this.props.id} /> 🤮</React.Fragment>)
        } else {
            vetoRadio = '';
        }

        // if (this.props.checked && this.props.whichIsChecked === "2" && this.props.clickedOptionId === this.props.id) {
        //     radio2 = true;
        // } else if (this.props.checked && this.props.whichIsChecked === "3") {
        //     radio3 = true;
        // } else {
        //     radio2 = false;
        //     radio3 = false;
        // }


        return (
          <div className={styles.interest}>
            <form>
                {vetoRadio}
                <input type="radio" id={this.props.id} name={this.props.id} value="2" onChange={this.props.interestChangeHandler} checked={this.props.whichIsChecked === 2 && this.props.clickedOptionId === this.props.id} /> 😊
                <input type="radio" id={this.props.id} name={this.props.id} value="3" onChange={this.props.interestChangeHandler} checked={this.props.whichIsChecked === 3 && this.props.clickedOptionId === this.props.id} /> 😍
            </form>

          </div>
        );
        }
    }

export default Interest;