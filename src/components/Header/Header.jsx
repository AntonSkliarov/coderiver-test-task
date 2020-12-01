import React from 'react';
import PropTypes from 'prop-types';
import './Header.sass';

export function Header({ selectedUser }) {
  const { name, surname } = selectedUser;
  const fullName = `${name} ${surname.slice(0, 1)}.`;

  return (
    <div className="header">
      <div>
        <h2 className="header__title">Your Profit</h2>
      </div>

      <div className="header__current-user">
        <img
          className="header__user-photo"
          src={selectedUser.image}
          alt=""
        />
        <div className="header__user-info">
          <p className="header__user-name">{fullName}</p>
          <p className="header__user-role">{selectedUser.role}</p>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  selectedUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
