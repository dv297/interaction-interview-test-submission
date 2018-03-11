import React from 'react';

import './InteractionEntry.css';
import InteractionShape from '../../proptypes/InteractionShape';
import TimeEntry from '../TimeEntry/TimeEntry';
import InteractionIcon from '../InteractionIcon/InteractionIcon';
import InteractionEntryCard from '../InteractionEntryCard/InteractionEntryCard';

const InteractionEntry = ({ interaction }) => {
  return (
    <div className="interaction-entry">
      <div className="interaction-entry-timeentry-container">
        <TimeEntry time={interaction.time} />
      </div>
      <div className="interaction-entry-icon-container">
        <InteractionIcon />
      </div>
      <div className="interaction-entry-card-container">
        <InteractionEntryCard interaction={interaction} />
      </div>
    </div>
  );
};

InteractionEntry.propTypes = {
  interaction: InteractionShape.isRequired,
};

export default InteractionEntry;
