import React from 'react';
import { SettingsButton } from '../SettingsButton';
import './UserFriends.sass';
import { userFriends } from '../../js/userFriends';

export function UserFriends() {
  return (
    <div className="user-friends">
      <div className="user-friends__header">
        <h3 className="user-friends__title">Friends</h3>
        <SettingsButton />
      </div>

      <div className="user-friends__list-wrapper">
        <ul className="user-friends__list">
          {userFriends.map(friend => (
            <div className="user-friend" key={friend.id}>
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
                  {friend.unreadMessages && (
                    <span className="user-friend__unreaded-messages">2</span>
                  )}
                </div>
              </li>
            </div>
          ))}

        </ul>
      </div>
    </div>
  );
}
