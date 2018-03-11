import React from 'react';

import './InteractionEvaluation.css';
import InteractionEvaluationShape from '../../proptypes/InteractionEvaluationShape';

const InteractionEvaluation = ({ evaluation }) => {
  return (
    <div className="interaction-evaluation">
      <span className="interaction-evaluation-text">{evaluation.text}</span>
      {evaluation.score && evaluation.maxScore &&
      <span className="interaction-evaluation-score">{evaluation.score}/{evaluation.maxScore}</span>}
    </div>
  )
};

InteractionEvaluation.propTypes = {
  evaluation: InteractionEvaluationShape.isRequired,
};

export default InteractionEvaluation;
