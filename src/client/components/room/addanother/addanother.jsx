import React from 'react';
import styles from './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


class AddAnother extends React.Component {

    render() {

        return (

            <div className={styles.add}>
                <Tooltip title="Add option" aria-label="Add option">
                    <IconButton onClick={this.props.addAnother} id={this.props.id}><i className="material-icons">add_circle</i></IconButton>
                </Tooltip>
            </div>

        );
        }
    }


export default AddAnother;