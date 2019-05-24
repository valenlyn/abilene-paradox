import React from 'react';
import styles from './style.scss';

class Form extends React.Component {

    // clickHandler(e) {
    //     alert("u CLICKED ME");
    // }

    clickHandler = (e) => {
        alert("u clockos moi");

        fetch(`/test?topic=hahaha&url=123214354`).then(res=>res.json());
    }

    // OK create an actual form here

    render() {

        return (
          <div>
            <input />
            <button onClick={this.clickHandler}>Create new rom</button>
          </div>
        );
        }
    }

export default Form;