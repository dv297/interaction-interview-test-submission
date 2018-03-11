import React from 'react';

import InteractionEvaluationShape from '../../proptypes/InteractionEvaluationShape';

const InteractionEvaluation = ({ evaluation }) => {
  return (
    <div>
      <p>{evaluation.text}</p>
    </div>
  )
};

InteractionEvaluation.propTypes = {
  evaluation: InteractionEvaluationShape.isRequired,
};

export default InteractionEvaluation;
