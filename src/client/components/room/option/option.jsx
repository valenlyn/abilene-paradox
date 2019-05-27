import React from 'react';
import styles from './style.scss';
import { withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import TextField from '@material-ui/core/TextField';

class Option extends React.Component {

    render() {

        return (
              <div className={styles.input}>

              <input

                margin="normal"
                variant="outlined"
                className={styles.optionInput}
                value={this.props.optionValue}
                onChange={this.props.optionInputHandler}
                id={this.props.id}
                autoFocus

              />
              </div>

        )
    }
}


export default Option;