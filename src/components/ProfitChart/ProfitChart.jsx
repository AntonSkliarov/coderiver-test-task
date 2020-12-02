import React from 'react';
import './ProfitChart.sass';
import chart from '../../images/chart/chart.png';

export function ProfitChart() {
  return (
    <img
      className="chart"
      src={chart}
      alt="Chart"
    />
  );
}
