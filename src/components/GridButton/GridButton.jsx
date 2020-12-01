import React from 'react';
// import className from 'classnames';
// import PropTypes from 'prop-types';git 
import gridButton from '../../images/service-icons/Grid.png';
import './GridButton.sass';

export function GridButton() {
  return (
    <button
      type="button"
      className="grid-button"
      // className={classNames("grid-button", {
      //   'sidebar__grid-button': !!props.markForClass,
      // })}
    >
      <img src={gridButton} alt="" />
    </button>
  );
}

// GridButton.propTypes = {
//   markForClass: PropTypes.string.isRequired,
// };
