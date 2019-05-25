import React from 'react';
import styles from './style.scss';

class Interest extends React.Component {


    render() {


        return (
          <div className={styles.interest}>

            <input type="radio" name={this.props.id} value="2" onChange={this.props.interestChangeHandler}/> 😊
            <input type="radio" name={this.props.id} value="3" onChange={this.props.interestChangeHandler}/> 😍

          </div>
        );
        }
    }

export default Interest;