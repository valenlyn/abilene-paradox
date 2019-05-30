import React from 'react';
import styles from './style.scss';

class Form extends React.Component {

    render() {


        return (
            <div className={styles.descWrapper}>

                <p className={styles.descText} >
                    <i className="material-icons">check_circle</i> Find out what your friends <span class="italic">TRULY want</span> <br />
                    <i className="material-icons">check_circle</i> Safe space to indicate preferences—<span class="italic">dissent MADLY and anonymously!</span> <br />
                    <i className="material-icons">check_circle</i> Manage suggestions and facilitate <span class="italic">DEEPLY</span> fruitful discussions <br />
                </p>
                <div className={styles.introWrapper}>
                    <h1>What is the Abilene paradox?</h1>
                    <p className={styles.descText}>
                    In the Abilene paradox, a group of people collectively decide on a course of action that is counter to the preferences of many or all of the individuals in the group. It involves a common breakdown of group communication in which each member mistakenly believes that their own preferences are counter to the group's and, therefore, does not raise objections.
                    </p>
                </div>
            </div>
        );
    }
}

export default Form;