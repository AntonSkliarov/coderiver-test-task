import React from 'react';
import './Chart.sass';
import chart from '../../images/chart/chart.png';

export function Chart() {
  return (
    <img
      className="chart"
      src={chart}
      alt="Chart"
    />
  );
}
