import React, { useState } from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { initialUsers, initialUser } from './js/sidebarUsers';
import { Header } from './components/Header';
import { Chart } from './components/Chart';
import { StatisticCards } from './components/StatisticCards';
import { Referrer } from './components/Referrer';
import { UserDetails } from './components/UserDetails';

export function App() {
  const [selectedUser] = useState(initialUser);
  const [users] = useState(initialUsers);

  return (
    <div className="container">
      <SideBar users={users} selectedUser={selectedUser} />
      <Header selectedUser={selectedUser} />
      <Chart />
      <StatisticCards selectedUser={selectedUser} />
      <Referrer />
      <UserDetails selectedUser={selectedUser} />
      <div className="user-events">USER EVENTS</div>
    </div>
  );
}
