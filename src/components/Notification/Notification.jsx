import css from './Notification.module.scss';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p style={css.Notification}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
