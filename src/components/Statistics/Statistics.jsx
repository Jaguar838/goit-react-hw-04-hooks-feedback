import PropTypes from 'prop-types'
import { Notification } from '../Notification';
import css from './Statistics.module.scss'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            {total > 0 && (
                <ul className={css.statisticList}>
                    <li className={css.statisticItem}>Good: {good}</li>
                    <li className={css.statisticItem}>Neutral: {neutral}</li>
                    <li className={css.statisticItem}>Bad: {bad}</li>
                    <li className={css.statisticItem}>Total: {total}</li>
                    <li className={css.statisticItem}>Positive Percentage: {positivePercentage}</li>
                </ul>
            )}
            {total === 0 && <Notification message='No Feedback given' />}
        </>
    )
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};