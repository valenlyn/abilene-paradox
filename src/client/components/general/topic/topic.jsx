import React from 'react';
import styles from './style.scss';

class Topic extends React.Component {


    render() {

        return (
            <div className={styles.topicWrapper}>
                <h1>{this.props.topic}</h1>
            </div>

        )
    }
}


export default Topic;