import React, { useState } from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { initialUsers } from './js/sidebarUsers';
import { Header } from './components/Header';

export function App() {
  const [selectedUserId] = useState(2);
  const [users] = useState(initialUsers);

  return (
    <body className="App">
      <div className="container">
        <SideBar users={users} selectedUserId={selectedUserId} />
        <Header users={users} selectedUserId={selectedUserId} />
        <div className="chart">CHART</div>
        <div className="statistic">STATISTIC</div>
        <div className="referrer">REFERRER</div>
        <div className="user-details">USER DETAILS</div>
        <div className="user-events">USER EVENTS</div>
      </div>
    </body>
  );
}