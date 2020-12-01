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
      <SideBar users={users} selectedUserId={selectedUserId} />
      <Header users={users} selectedUserId={selectedUserId} />
    </body>
  );
}
