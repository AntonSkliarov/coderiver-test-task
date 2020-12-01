import React from 'react';
import PropTypes from 'prop-types';
import './Header.sass';

export function Header({ users, selectedUserId }) {
  return (
    <div className="header">
      <div>
        <h2 className="header__title">Your Profit</h2>
      </div>

      <div className="header__user-info">
        <img className="header__user-photo" src="" alt="" />
        <p className="header__user-name">JJ</p>
        <p className="header__user-role">Admin</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  selectedUserId: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
