import React, { useState } from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { initialUsers, initialUser } from './js/sidebarUsers';
import { Header } from './components/Header';
import { ProfitChart } from './components/Chart';
import { StatisticCards } from './components/StatisticCards';
import { Referrer } from './components/Referrer';
import { UserDetails } from './components/UserDetails';
import { UserEvents } from './components/UserEvents/UserEvents';

export function App() {
  const [selectedUser] = useState(initialUser);
  const [users] = useState(initialUsers);

  return (
    <div className="container">
      <SideBar users={users} selectedUser={selectedUser} />
      <Header selectedUser={selectedUser} />
      <main className="main">
        <ProfitChart />
        <StatisticCards selectedUser={selectedUser} />
        <Referrer />
      </main>
      <UserDetails selectedUser={selectedUser} />
      <UserEvents selectedUser={selectedUser} />
    </div>
  );
}
