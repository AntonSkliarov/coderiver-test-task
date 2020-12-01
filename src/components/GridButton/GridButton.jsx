import React from 'react';
import gridButton from '../../images/service-icons/Grid.png';
import './GridButton.sass';

export function GridButton() {
  return (
    <button
      type="button"
      className="grid-button"
    >
      <img src={gridButton} alt="" />
    </button>
  );
}
