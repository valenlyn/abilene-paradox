import React from 'react';
import styles from './style.scss';

class Form extends React.Component {


    // fetch(`/test?topic=hahaha&url=123214354`).then(res=>res.json());

    // OK create an actual form here

    render() {

        return (
          <div className={styles.rootWrapper}>
            <input className={styles.createRoomInput} value={this.props.roomName} onChange={this.props.roomInput} autoFocus />
             <button className={styles.createRoomButton} onClick={this.props.submitRoom}>GO</button>
          </div>
        );
        }
    }

export default Form;