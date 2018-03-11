import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';

import './TimeEntry.css';

const addPlaceholderDigits = (digit) => digit > 10 ? digit : `0${digit}`;

const TimeEntry = ({ time }) => {
  const duration = moment.duration(time, 'seconds');
  const formattedHour = addPlaceholderDigits(duration.hours());
  const formattedMinute = addPlaceholderDigits(duration.minutes());
  const formattedSeconds = addPlaceholderDigits(duration.seconds());

  const formattedTime = `${formattedHour}:${formattedMinute}:${formattedSeconds}`;

  return <div className="timeentry">{formattedTime}</div>
};

TimeEntry.propTypes = {
  time: PropTypes.number.isRequired,
};

export default TimeEntry;
