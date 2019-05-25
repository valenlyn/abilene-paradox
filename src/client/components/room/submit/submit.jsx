import React from 'react';
import styles from './style.scss';

class Submit extends React.Component {


    render() {

        return (
          <button onClick={this.props.submitOption}>Next</button>
        );
        }
    }

export default Submit;