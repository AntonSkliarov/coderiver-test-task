import React from 'react';
import './App.sass';
import { SideBar } from './components/SideBar/SideBar';
import { usersSidebar } from './js/sidebarUsers';

export const App = () => (
  <>
    <SideBar users={usersSidebar} />

    {/* <div>
      <a href="#/">Profit</a>
      <a href="#/">Explore</a>
      <a href="#/">Profile</a>
      <a href="#/">Photos</a>
      <a href="#/">Videos</a>
      <a href="#/">Invite</a>
      <a href="#/">Music</a>
      <a href="#/">Candidates</a>
      <a href="#/">Calendar</a>
      <a href="#/">Feedback</a>
      <a href="#/">Help</a>
      <input type="text" placeholder="Search" />
    </div> */}
  </>
);
