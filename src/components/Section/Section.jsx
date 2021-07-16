import styles from './Section.module.scss';
import PropTypes from 'prop-types';

export const Section = ({ children }) => <div className={styles.container}>{children}</div>;

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
