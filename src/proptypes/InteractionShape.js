import PropTypes from 'prop-types';

const InteractionShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

export default InteractionShape;
