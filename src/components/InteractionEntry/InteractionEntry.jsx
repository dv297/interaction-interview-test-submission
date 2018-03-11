import React from 'react';
import InteractionShape from '../../proptypes/InteractionShape';

const InteractionEntry = ({ interaction }) => {
  return <div>{interaction.title}</div>;
};

InteractionEntry.propTypes = {
  interaction: InteractionShape.isRequired,
};

export default InteractionEntry;
