

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
        totalFeedback = ({ good, neutral, bad } = this.state) =>
            good + neutral + bad;
        positiveFeedback = ({good} = this.state, total = this.totalFeedback()) =>
            good * 100 / total;
        onClickGood = () => {
            this.setState(prevState => ({
                good: prevState.good +1,
            }))
        }
        onClickBad = () => {
            this.setState(prevState => ({
                bad: prevState.bad +1,
            }))
        }
        onClickNeutral = () => {
            this.setState(prevState => ({
                neutral: prevState.neutral +1,
            }))
        }



        render() {

            const {bad, good, neutral} = this.state;


            return(
                < Section title = {'Please leave feedback'}>

                    <FeedbackOptions
                        clickGood = {this.onClickGood}
                        clickBad = {this.onClickBad}
                        clickNeutral ={this.onClickNeutral}

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
        clickGood: PropTypes.func.isRequired,
     clickBad: PropTypes.func.isRequired,
     clickNeutral: PropTypes.func.isRequired
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
