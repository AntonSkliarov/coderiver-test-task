import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './StatisticCard.sass';
import { numberWithCommas } from '../../js/functions';
import increaseIcon from '../../images/service-icons/increase.png';
import decreaseIcon from '../../images/service-icons/decrease.png';

export function StatisticCard({ statistic }) {
  const formatedTotal = numberWithCommas(statistic.total);

  return (
    <div className="statistic-card">
      <div className="statistic-card__main-info">
        <span className="statistic-card__numbers">
          {statistic.name === 'total paid out'
            ? `$${formatedTotal}`
            : formatedTotal
          }
        </span>
        <span className={classNames({
          'statistic-card__new-orders-total': statistic.name === 'new orders',
          'statistic-card__sales': statistic.name === 'total sales',
          'statistic-card__paid-out': statistic.name === 'total paid out',
          'statistic-card__new-customers': statistic.name === 'new customers',
        })}
        >
          {statistic.name}
        </span>
      </div>
      <div className="statistic-card__rate-info">
        <div className="statistic-card__rate-icon">
          <img
            src={statistic.rate === 'increace'
              ? increaseIcon
              : decreaseIcon}
            alt={`${statistic.rate} icon`}
          />
        </div>
        <div className="statistic-card__rate-text">
          <span>{`${statistic.rateValue}% ${statistic.rate}`}</span>
        </div>

      </div>
    </div>
  );
}

StatisticCard.propTypes = {
  statistic:
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      rate: PropTypes.string.isRequired,
      rateValue: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
};
