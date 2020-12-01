import React, { useState } from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { initialUsers, initialUser } from './js/sidebarUsers';
import { Header } from './components/Header';

export function App() {
  const [selectedUser] = useState(initialUser);
  const [users] = useState(initialUsers);

  return (
    <div className="container">
      <SideBar users={users} selectedUser={selectedUser} />
      <Header selectedUser={selectedUser} />
      <div className="chart">CHART</div>
      <div className="statistic">STATISTIC</div>
      <div className="referrer">REFERRER</div>
      <div className="user-details">USER DETAILS</div>
      <div className="user-events">USER EVENTS</div>
    </div>
  );
}
