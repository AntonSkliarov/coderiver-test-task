import React from 'react';
import { SettingsButton } from '../SettingsButton';
import './UserFriends.sass';
import { userFriends } from '../../js/userFriends';
import { UserFriend } from '../UserFriend';

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
            <UserFriend friend={friend} key={friend.id} />
          ))}

        </ul>
      </div>
    </div>
  );
}
