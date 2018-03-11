import React from 'react';
import PropTypes from 'prop-types';

import InteractionShape from '../../proptypes/InteractionShape';
import InteractionEntry from '../InteractionEntry/InteractionEntry';

const InteractionsList = ({ interactions }) => {
  return interactions.map((interaction) => <InteractionEntry key={interaction.id} interaction={interaction} />);
};

InteractionsList.propTypes = {
  interactions: PropTypes.arrayOf(InteractionShape).isRequired,
};

export default InteractionsList;
