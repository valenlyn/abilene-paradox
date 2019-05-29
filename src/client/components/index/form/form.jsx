import React from 'react';
import styles from './style.scss';

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
                    phrases: ["What should we do for dinner?"]
                    }


        this.setState( prevState => ({
          phrases: ["What should we go as for Halloween?"]
        }));

        let phrases = ["What should we name our kitten? 😻", "How should we tell Bryan he's adopted? ☠️", "How should we divide our inheritance? 🤠", "Who should we go as for Halloween? 🎃", "Why should we care?", "What should we make for lunch? 🌮", "How large should our budget be?", "Ideas for our project 💡", "What should we bake? 🧁", "When should we meet? 🍁", "How should we hide the corpse?", "Baby name ideas 🍼", "What should we do this weekend?", "What should we do tonight? 🤡", "What are our similarities?", "😺🐷🐶?", "What should we watch on Netflix? 📺", "Who should we invite to our party? 🥳", "How can we sabotage Bryan's career? 🤫", "How can we get Bryan fired? 😏", "What video game should we play?", "What team-bonding game should we play? 🙄", "What movie should we watch?", "What should we do now? 🛸", "What should we do with our lottery money?", "Who should we 🔥 to save costs?", "What activity should we do today?", "Where should we go shopping? 🛍", "Where should we meet? 😎", "What time should we meet? ⏰", "Where should we get breakfast? 🍳", "Shania's birthday gift ideas 😜", "Who should we add to our insurance policy? 🔪", "Frivolous items to add to our grocery list 🐿", "What should we name our son? 🦕"];


        setInterval( () => {
          this.setState( prevState => ({
            phrases: phrases
          }));
          phrases.sort(() => 0.5 - Math.random());
        }, 2500);


    }

    render() {

        let placeholderPhrases = this.state.phrases[0];


        return (
          <div className={styles.rootWrapper}>
            <input className={styles.createRoomInput} value={this.props.roomName} onChange={this.props.roomInput} autoFocus placeholder={placeholderPhrases}/>
             <button type="submit" className={styles.createRoomButton} onClick={this.props.submitRoom}>
             GO
             </button>

          </div>
        );
        }
    }

export default Form;