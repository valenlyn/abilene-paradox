import React from 'react';
import styles from './style.scss';

class Form extends React.Component {


    // fetch(`/test?topic=hahaha&url=123214354`).then(res=>res.json());

    // OK create an actual form here

    render() {

        return (
          <div>
            <input value={this.props.roomName} onChange={this.props.roomInput} />
            <button onClick={this.props.submitRoom}>Create new rom</button>
          </div>
        );
        }
    }

export default Form;