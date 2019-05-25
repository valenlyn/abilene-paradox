import React from 'react';
import styles from './style.scss';

class AddAnother extends React.Component {


    render() {

        return (
          <button onClick={this.props.addAnother} id={this.props.id}>+</button>
        );
        }
    }

export default AddAnother;