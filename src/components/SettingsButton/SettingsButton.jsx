import React from 'react';
import settingsButton from '../../images/service-icons/Settings.png';
import './SettingsButton.sass';

export function SettingsButton() {
  return (
    <button
      type="button"
      className="settings-button"
    >
      <img src={settingsButton} alt="" />
    </button>
  );
}
