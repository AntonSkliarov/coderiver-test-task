import React from 'react';
import './Referrer.sass';
import { referrer } from '../../js/referrer';

export function Referrer() {
  return (
    <div className="referrer">
      <table className="referrer__table">
        <thead className="referrer__table-header">
          <tr>
            <th className="referrer__table-name">Referrer</th>
            <th className="referrer__table-header-column-name">Views</th>
            <th className="referrer__table-header-column-name">Sales</th>
            <th className="referrer__table-header-column-name">Conversion</th>
            <th className="referrer__table-header-column-name">Total</th>
          </tr>
        </thead>
        <tbody className="referrer__table-body">
          {referrer.map(row => (
            <tr className="referrer__table-row">
              <td className="referrer__table-data">{row.name}</td>
              <td>{row.views}</td>
              <td>{row.sales}</td>
              <td>{row.converion}</td>
              <td>{`$${row.total}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
