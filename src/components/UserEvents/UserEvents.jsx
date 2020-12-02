import React from 'react';
import PropTypes from 'prop-types';
import './UserEvents.sass';

export function UserEvents({ selectedUser }) {
  return (
    <div className="user-events">
      <div>
        <p className="user-events__title">
          {`Upcoming Events with ${selectedUser.name}`}
        </p>

        <div className="user-events__event-wrapper">
          <div>
            <h4 className="user-events__event-name">Super Photography 2016</h4>
            <p className="user-events__event-date">
              January 13th, Vienna - 6:30 PM
            </p>
          </div>

          <div>
            <span className="user-events__event-photography">Photography</span>
          </div>
        </div>

        <div className="user-events__event-wrapper">
          <div>
            <h4 className="user-events__event-name">Photox Expo</h4>
            <p className="user-events__event-date">
              March 28th, Paris - 7:30 PM
            </p>
          </div>

          <div>
            <span className="user-events__event-design">Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}

UserEvents.propTypes = {
  selectedUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
