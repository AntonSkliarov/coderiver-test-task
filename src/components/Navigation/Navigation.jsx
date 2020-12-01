import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.sass';

export function Navigation({ newInvitations }) {
  return (
    <>
      <nav className="navigation sidebar__navigation">
        <div className="navigation__container">
          <h3 className="navigation__menu-title">Menu</h3>
          <ul className="navigation__menu-list">
            <li
              className="navigation__menu-item
                navigation__menu-item--active"
            >
              <a
                className="navigation__menu-item-link"
                href="#profit"
              >
                Profit
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#explore"
              >
                Explore
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#profile"
              >
                Profile
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#photos"
              >
                Photos
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#videos"
              >
                Videos
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link
                  navigation__menu-item-link--notifications"
                href="#invite"
              >
                Invite
              </a>
              <span className="navigation__new-invitations">
                {newInvitations}
              </span>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-item-link" href="#music">Music</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-item-link" href="#candidates">
                Candidates
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#calendar"
              >
                Calendar
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#feedback"
              >
                Feedback
              </a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-item-link"
                href="#feedback"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="navigation__input-search-wrapper">
          <input
            className="navigation__input-search"
            type="text"
            placeholder="Search"
          />
        </div>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  newInvitations: PropTypes.number.isRequired,
};
