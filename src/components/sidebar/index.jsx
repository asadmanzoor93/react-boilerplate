import React from 'react';
import Nav from './nav.jsx';
import './index.scss';

const SideBar = () => {
  return (
    <div>
      <div className="sidebar-wrapper">
        <Nav />
      </div>
    </div>
  );
};

export default SideBar;
