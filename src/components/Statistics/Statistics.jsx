import PropTypes from 'prop-types'
import { Notification } from '../Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercantage }) => {
    return (
        <>
            {total > 0 && (
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive Percantage: {positivePercantage}</li>
                </ul>
            )}
            {total === 0 && <Notification message='No Feedback given' />}
        </>
    )
};
Statistics.propTypes = {
    good: PropTypes.string,
    neutral: PropTypes.string,
    bad: PropTypes.string,
    total: PropTypes.string,
    positivePercantage: PropTypes.string,
};