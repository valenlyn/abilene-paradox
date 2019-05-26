import React from 'react';
import styles from './style.scss';

class Interest extends React.Component {


    render() {

        let vetoRadio;


        if (this.props.veto) {
            vetoRadio = (<React.Fragment><input type="radio" id={this.props.id} name={this.props.id} value="1" onChange={this.props.interestChangeHandler} /> 🤮</React.Fragment>)
        } else {
            vetoRadio = '';
        }

        return (
          <div className={styles.interest}>
            <form>
                {vetoRadio}
                <input type="radio" id={this.props.id} name={this.props.id} value="2" onChange={this.props.interestChangeHandler} /> 😊
                <input type="radio" id={this.props.id} name={this.props.id} value="3" onChange={this.props.interestChangeHandler} /> 😍
            </form>

          </div>
        );
        }
    }

export default Interest;