import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/project-information">Project Information</Link></li>
        <li><Link to="/regions">Regions</Link></li>
        <li><Link to="/specifications">Specifications</Link></li>
        <li><Link to="/devices">Devices</Link></li>
        <li><Link to="/filter-options">Filter Options</Link></li>
        <li><Link to="/submit">Submit</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
