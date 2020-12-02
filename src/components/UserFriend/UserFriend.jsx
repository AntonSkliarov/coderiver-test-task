import React from 'react';
import PropTypes from 'prop-types';
import './UserFriend.sass';

export function UserFriend({ friend }) {
  return (
    <div className="user-friend">
      <li className="user-friend__item">
        <img
          className="user-friend__image"
          src={friend.image}
          alt={friend.name}
          title={friend.name}
        />
        <div className="user-friend__info">
          <p className="user-friend__name">{friend.name}</p>
          {friend.typing === true
            ? <p className="user-friend__typing">Typing...</p>
            : <p className="user-friend__position">{friend.position}</p>
          }
          {!!friend.unreadMessages && (
            <span className="user-friend__unreaded-messages">2</span>
          )}
        </div>
      </li>
    </div>
  );
}

UserFriend.propTypes = {
  friend: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    typing: PropTypes.bool.isRequired,
    unreadMessages: PropTypes.number.isRequired,
  }).isRequired,
};
