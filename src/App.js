

 import React, {Component} from "react";
import PropTypes from 'prop-types'
import Statistics from './components/Statistics'
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";


    class App extends Component {

        state = {
            good:0,
            neutral: 0,
            bad: 0,
        }

        onClick = stateName => {
            this.setState(prevState => ({
                [stateName]: prevState[stateName] + 1,
            }));
        };
        totalFeedback = () =>
            Object.values(this.state).reduce(
                (total, stateQuantity) => total + stateQuantity,
                0,
            );

        positiveFeedback = () =>
            this.totalFeedback()
                ? Math.round((this.state.good * 100) / this.totalFeedback())
                : 0;




        render() {

            const {bad, good, neutral} = this.state;


            return(
                < Section title = {'Please leave feedback'}>

                    <FeedbackOptions
                        clickButton = {this.onClick}
                        options = { ['good', 'bad', 'neutral']}


                    />

                    <h2>Statistics</h2>
                    {this.totalFeedback() > 0 ?
                        < Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.totalFeedback()}
                            positive={this.positiveFeedback()}
                        />
                        :

                        <Notification
                            message={"No feedback given"}/>
                    }

                </Section>

        )

            }

    }

 Section.propTypes = {
     title: PropTypes.string.isRequired
 }
 FeedbackOptions.propTypes = {
        clickButton: PropTypes.func.isRequired,
        options: PropTypes.array.isRequired

 }
 Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positive: PropTypes.number.isRequired
 }
 Notification.propTypes = {
        message: PropTypes.string.isRequired
 }
export default App
