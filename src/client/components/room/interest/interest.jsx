import React from 'react';
import styles from './style.scss';
import { withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import Radio from '@material-ui/core/Radio';

class Interest extends React.Component {

    render() {

        const ColorRadio = withStyles({
          root: {
            color: amber[400],
            '&$checked': {
              color: amber[800],
            },
          },
          checked: {},
        })(props => <Radio color="default" {...props} />);

        let vetoRadio;

        if (this.props.veto) {

            vetoRadio = (
                <div className={styles.moodWrapper}>

                    <Radio
                        type="radio"
                        id={this.props.id}
                        name={this.props.id}
                        value="1"
                        onChange={this.props.interestChangeHandler}
                        checked={this.props.selectedValue === "1" && this.props.radioSelect && this.props.optionId === this.props.id}
                    />
                        <span className={styles.moodLabel}>🤮</span>
                </div>
            )
        } else {
            vetoRadio = '';
        }

        return (
          <div className={styles.interest}>

                {vetoRadio}

                <div className={styles.moodWrapper}>
                    <ColorRadio
                        type="radio"
                        id={this.props.id}
                        name={this.props.id}
                        value="2"
                        onChange={this.props.interestChangeHandler}
                        checked={this.props.selectedValue === "2"  && this.props.radioSelect && this.props.optionId === this.props.id }
                    />

                        <span className={styles.moodLabel}>😊</span>
                </div>

                <div className={styles.moodWrapper}>
                    <ColorRadio
                        type="radio"
                        id={this.props.id}
                        name={this.props.id}
                        value="3"
                        onChange={this.props.interestChangeHandler}
                        checked={this.props.selectedValue === "3"  && this.props.radioSelect && this.props.optionId === this.props.id}
                        />

                        <span className={styles.moodLabel}>😍</span>
                </div>


          </div>
        );
        }
    }

export default Interest;