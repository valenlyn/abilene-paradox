import React from 'react';
import styles from './style.scss';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


class AddAnother extends React.Component {


    render() {

        return (
            <React.Fragment>
                <AddIcon />
                <button onClick={this.props.addAnother} id={this.props.id}>+</button>
            </React.Fragment>

        );
        }
    }

export default AddAnother;