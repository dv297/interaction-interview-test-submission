import PropTypes from 'prop-types';

const InteractionEvaluation = PropTypes.shape({
  text: PropTypes.string.isRequired,
  score: PropTypes.number,
  maxScore: PropTypes.number,
  icon: PropTypes.string.isRequired,
});

export default InteractionEvaluation;
