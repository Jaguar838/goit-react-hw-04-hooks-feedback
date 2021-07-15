import PropTypes from 'prop-types';
const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => <FeedbackBtn feedback={option} onLeaveFeedback={onLeaveFeedback} />);
};

FeedbackOptions.PropTypes = {
    options: PropTypes.arrayOf {
    PropTypes.string,
    onLeaveFeedback: PropTypes.func.isRequired
  }
};
