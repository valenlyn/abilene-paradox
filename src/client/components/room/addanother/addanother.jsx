import React from 'react';
import styles from './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

class AddAnother extends React.Component {

    render() {

        return (
            <React.Fragment>

                <IconButton onClick={this.props.addAnother} id={this.props.id}><i class="material-icons">add_circle_outline</i></IconButton>
            </React.Fragment>

        );
        }
    }


export default AddAnother;