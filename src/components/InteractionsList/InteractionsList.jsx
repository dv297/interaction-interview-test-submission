import React from 'react';
import PropTypes from 'prop-types';

import './InteractionsList.css';
import InteractionShape from '../../proptypes/InteractionShape';
import InteractionEntry from '../InteractionEntry/InteractionEntry';

const InteractionsList = ({ interactions }) => {
  return interactions.map((interaction) => (
    <div className="interaction-entry-container" key={interaction.id}>
      <InteractionEntry interaction={interaction} />
    </div>
  ));
};

InteractionsList.propTypes = {
  interactions: PropTypes.arrayOf(InteractionShape).isRequired,
};

export default InteractionsList;
