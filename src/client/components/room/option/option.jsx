import React from 'react';
import styles from './style.scss';

class Option extends React.Component {


    render() {

        return (
              <div className={styles.input}>
                <input value={this.props.optionValue} onChange={this.props.optionInputHandler} id={this.props.id} autoFocus />
              </div>

        )
    }
}


export default Option;