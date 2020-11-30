import React from 'react';
import PropTypes from 'prop-types';
import './SideBar.sass';

export function SideBar({ users }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__users-icons">
        {users.map(user => (
          <div className="sidebar__user-icon" key={user.id}>
            <img
              title={users.name}
              src={user.image}
              alt="User"
            />
          </div>
        ))}
      </div>

      <div className="sidebar__service-buttons">
        <div className="sidebar__grid-button" />
        <div className="sidebar__settings-button" />
      </div>
    </aside>
  );
}

SideBar.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
