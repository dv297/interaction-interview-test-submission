import PropTypes from 'prop-types';

import InteractionEvaluation from './InteractionEvaluationShape';

const InteractionShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  note: PropTypes.string,
  time: PropTypes.number,
  evaluation: InteractionEvaluation,
});

export default InteractionShape;
