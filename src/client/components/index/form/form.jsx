import React from 'react';
import styles from './style.scss';

class Form extends React.Component {


    // fetch(`/test?topic=hahaha&url=123214354`).then(res=>res.json());

    // OK create an actual form here

    render() {

        return (
          <div className={styles.rootWrapper}>
          <form onSubmit={this.props.submitRoom}>
            <input className={styles.createRoomInput} value={this.props.roomName} onChange={this.props.roomInput} autoFocus placeholder="e.g. What should we do for dinner?"/>
             <button type="submit" className={styles.createRoomButton}>
             GO
             </button>
          </form>

          </div>
        );
        }
    }

export default Form;