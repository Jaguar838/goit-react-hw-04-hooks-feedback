import React, { useState } from 'react';
import { Container } from 'components/Container';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Statistics } from 'components/Statistics';

import { FEEDBACK_OPTIONS } from 'server/constants';

import css from './App.module.css';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function handleCountFeedback({ target }) {
        const { feedback } = target.dataset;

        switch (feedback) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;

            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;

            case 'bad':
                setBad(prevState => prevState + 1);
                break;

            default:
                return;
        }
    }

    function positiveCountFeedback() {
        const total = good + neutral + bad;
        return total ? Math.round((good / total) * 100) : 0;
    }

    return (
        <Container className={css.App}>
            <Section title="Please leave feedback ">
                <FeedbackOptions
                    options={FEEDBACK_OPTIONS}
                    onLeaveFeedback={handleCountFeedback}
                />
            </Section>
            <Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={positiveCountFeedback()}
                />
            </Section>
        </Container>
    );
}

export default App;
