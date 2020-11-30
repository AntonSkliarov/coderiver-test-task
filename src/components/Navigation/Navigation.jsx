import React from 'react';
import './Navigation.sass';

export function Navigation() {
  return (
    <>
      <nav className="navigation sidebar__navigation">
        <div className="navigation__container">
          <h2 className="navigation__menu-title">Menu</h2>
          <ul className="navigation__menu-list">
            <li
              className="navigation__menu-item
                navigation__menu-item--active"
            >
              <a className="navigation__menu-link" href="#profit">Profit</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#explore">Explore</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#profile">Profile</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#photos">Photos</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#videos">Videos</a>
            </li>

            <li className="navigation__menu-item">
              <a
                className="navigation__menu-link
                  navigation__menu-link--notifications"
                href="#invite"
              >
                Invite
              </a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#music">Music</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#candidates">
                Candidates
              </a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#calendar">Calendar</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#feedback">Feedback</a>
            </li>

            <li className="navigation__menu-item">
              <a className="navigation__menu-link" href="#feedback">Help</a>
            </li>
          </ul>
        </div>
        <input
          className="navigation__input-search"
          type="text"
          placeholder="Search"
        />
      </nav>
    </>
  );
}
