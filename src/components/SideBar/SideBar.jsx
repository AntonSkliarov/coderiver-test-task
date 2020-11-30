import React, { useState } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import './SideBar.sass';
import { Navigation } from '../Navigation/Navigation';

export function SideBar({ users }) {
  const [selectedUserId] = useState(2);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__users-icons">
          {users.map(user => (
            <div
              className={className('sidebar__user-icon', {
                'sidebar__user-icon--active': selectedUserId === user.id,
              })}
              key={user.id}
            >
              <img
                title={users.name}
                src={user.image}
                alt="User"
              />
            </div>
          ))}

          <div className="sidebar__service-buttons">
            <div className="grid-button sidebar__grid-button" />
            <div className="settings-button sidebar__settings-button" />
          </div>
        </div>

        <div className="sidebar__active-menu">
          <Navigation />

          <div className="friends">
            <div className="friend">FRIEND</div>
          </div>
        </div>
      </aside>
    </>
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
