import React, { useState } from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { initialUsers, initialUser } from './js/sidebarUsers';
import { Header } from './components/Header';
import { Chart } from './components/Chart';
import { StatisticCards } from './components/StatisticCards/StatisticCards';

export function App() {
  const [selectedUser] = useState(initialUser);
  const [users] = useState(initialUsers);

  return (
    <div className="container">
      <SideBar users={users} selectedUser={selectedUser} />
      <Header selectedUser={selectedUser} />
      <Chart />
      <StatisticCards selectedUser={selectedUser} />
      <div className="referrer">REFERRER</div>
      <div className="user-details">USER DETAILS</div>
      <div className="user-events">USER EVENTS</div>
    </div>
  );
}
