import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.sass';
import userBackground from '../../images/user-background/user-background.jpg';

export function UserDetails({ selectedUser }) {
  return (
    <div className="user-details">
      <div className="user-details__main-info-wrapper">
        <img
          className="user-details__background-image"
          src={userBackground}
          alt="Background with clouds"
        />

        <div className="user-details__main-info">
          <img
            className="user-details__user-image"
            src={selectedUser.image}
            alt={selectedUser.name}
          />

          <p className="user-details__user-fullname">
            {`${selectedUser.name} ${selectedUser.surname}`}
          </p>

          <p className="user-details__user-position">
            Beta Tester | Ultimate User
          </p>
        </div>
      </div>

      <div className="user-details__additional-info">
        <div className="user-details__additional-info-email">
          <h4 className="user-details__additional-info-email-title">Email</h4>
          <p className="user-details__additional-info-email-adress">
            jordan.jackson@dashboard.com
          </p>
        </div>

        <div className="user-details__additional-info-mobile">
          <h4 className="user-details__additional-info-mobile-title">Mobile</h4>
          <p className="user-details__additional-info-mobile-number">
            +44 (0) 7887 665 588
          </p>
        </div>

        <div className="user-details__additional-info-skill-level">
          <h4 className="user-details__additional-info-skill-level-title">
            Skill Level
          </h4>
          <p className="user-details__additional-info-skill-level-text">
            Senior (50K+)
          </p>
        </div>

        <div className="user-details__additional-info-paid-out">
          <h4 className="user-details__additional-info-paid-out-title">
            Paid Out Limit
          </h4>
          <div>
            <img src="" alt="" />
            <span>$580</span>
            <span>$750</span>
          </div>
        </div>

        <div className="user-details__additional-info-bio">
          <h4 className="user-details__additional-info-bio-title">Bio</h4>
          <p>
            Jordan graduated from Cornell University in 2004
            with a Bachelor degree in computer science and a
            specialization in mathematics. While there, he
            published two articles on Code-project.
          </p>
        </div>

        <div className="user-details__additional-info-skills">
          <h4>Skill Level</h4>
          <div>
            <span>Photography</span>
          </div>
          <div>
            <span>Teacher</span>
          </div>
          <div>
            <span>Traveler</span>
          </div>
          <div>
            <span>iOS</span>
          </div>
        </div>

      </div>
    </div>
  );
}

UserDetails.propTypes = {
  selectedUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
