import css from './Container.module.scss';
import PropTypes from 'prop-types';

export const Container = ({ children }) => (
    <div className={css.container}>{children}</div>
);

Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
