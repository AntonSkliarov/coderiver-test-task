import React from 'react';
import PropTypes from 'prop-types';
import './StatisticCards.sass';
import { StatisticCard } from '../StatisticCard/StatisticCard';

export function StatisticCards({ selectedUser }) {
  return (
    <div className="statistic-cards">
      {selectedUser.statistics.map(statistic => (
        <StatisticCard
          statistic={statistic}
          key={statistic.id}
        />
      ))}
    </div>
  );
}

StatisticCards.propTypes = {
  selectedUser: PropTypes.shape({
    statistics: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      rate: PropTypes.string.isRequired,
      rateValue: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired),
  }).isRequired,
};
