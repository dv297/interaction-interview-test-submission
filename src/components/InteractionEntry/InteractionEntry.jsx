import React from 'react';

import './InteractionEntry.css';
import InteractionShape from '../../proptypes/InteractionShape';
import InteractionEvaluation from '../InteractionEvaluation/InteractionEvaluation';

const InteractionEntry = ({ interaction }) => {
  return (
    <div className="interaction-entry">
      <h1 className="interaction-entry-title">{interaction.title}</h1>
      {interaction.subtitle && <h2 className="interaction-entry-subtitle">{interaction.subtitle}</h2>}
      {interaction.notes && <p className="interaction-entry-notes">{interaction.notes}</p>}
      {interaction.evaluation && (
        <div>
          <hr />
          <div className="interaction-entry-evaluation">
            <InteractionEvaluation evaluation={interaction.evaluation} />
          </div>
        </div>
      )}
    </div>
  );
};

InteractionEntry.propTypes = {
  interaction: InteractionShape.isRequired,
};

export default InteractionEntry;
