import React from 'react';

import './InteractionEntry.css';
import InteractionShape from '../../proptypes/InteractionShape';
import InteractionEvaluation from '../InteractionEvaluation/InteractionEvaluation';

const InteractionEntry = ({ interaction }) => {
  return (
    <div className="interaction-entry">
      <h1>{interaction.title}</h1>
      {interaction.subtitle && <h2>{interaction.subtitle}</h2>}
      {interaction.notes && <p>{interaction.notes}</p>}
      {interaction.evaluation && <InteractionEvaluation evaluation={interaction.evaluation} />}
    </div>
  );
};

InteractionEntry.propTypes = {
  interaction: InteractionShape.isRequired,
};

export default InteractionEntry;
