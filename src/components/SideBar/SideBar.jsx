import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import './SideBar.sass';
import { Navigation } from '../Navigation/Navigation';
import { SettingsButton } from '../SettingsButton';
import { GridButton } from '../GridButton';
import { UserFriends } from '../UserFriends';

export function SideBar({ users, selectedUser }) {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__users-buttons">
          {users.map(user => (
            <div
              className={className('sidebar__user-button-wrapper', {
                'sidebar__user-button-wrapper--active':
                  selectedUser.id === user.id,
              })}
              key={user.id}
            >
              <button className="sidebar__user-button" type="button">
                <img
                  title={users.name}
                  src={user.image}
                  alt={users.name}
                />
              </button>
            </div>
          ))}

          <div className="sidebar__service-buttons-wrapper">
            <div className="sidebar__service-buttons">
              <GridButton markForClass="mark" />
              <SettingsButton />
            </div>
          </div>
        </div>

        <div className="sidebar__menu">
          <Navigation newInvitations={selectedUser.newInvitations} />
          <UserFriends />
        </div>
      </aside>
    </>
  );
}

SideBar.propTypes = {
  selectedUser: PropTypes.shape({
    newInvitations: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
