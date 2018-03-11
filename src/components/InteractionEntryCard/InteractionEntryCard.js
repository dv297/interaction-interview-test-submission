import React from 'react';

import './InteractionEntryCard.css';
import InteractionShape from '../../proptypes/InteractionShape';
import InteractionEvaluation from '../InteractionEvaluation/InteractionEvaluation';

const InteractionEntryCard = ({ interaction }) => {
  return (
    <div className="interaction-entry-card">
      <h1 className="interaction-entry-card-title">{interaction.title}</h1>
      {interaction.subtitle && <h2 className="interaction-entry-card-subtitle">{interaction.subtitle}</h2>}
      {interaction.notes && <p className="interaction-entry-card-notes">{interaction.notes}</p>}
      {interaction.evaluation && (
        <div>
          <hr />
          <div className="interaction-entry-card-evaluation">
            <InteractionEvaluation evaluation={interaction.evaluation} />
          </div>
        </div>
      )}
    </div>
  );
};

InteractionEntryCard.propTypes = {
  interaction: InteractionShape.isRequired,
};

export default InteractionEntryCard;
