import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gridButton from '../../images/service-icons/Grid.png';
import './GridButton.sass';

export function GridButton({ markForClass }) {
  return (
    <button
      type="button"
      className={classNames('grid-button', {
        'sidebar__grid-button': !!markForClass,
      })}
    >
      <img src={gridButton} alt="" />
    </button>
  );
}

GridButton.propTypes = {
  markForClass: PropTypes.string.isRequired,
};
