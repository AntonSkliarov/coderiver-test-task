import React from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { usersSidebar } from './js/sidebarUsers';

export const App = () => (
  <>
    <SideBar users={usersSidebar} />

  </>
);
