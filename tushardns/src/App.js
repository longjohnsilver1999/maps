import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectInformation from './components/ProjectInformation';
import Regions from './components/Regions';
import Specifications from './components/Specifications';
import Devices from './components/Devices';
import FilterOptions from './components/FilterOptions';
import SubmitSection from './components/SubmitSection';
function App() {
  return (
    <Router>
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/project-information" component={ProjectInformation} />
          <Route path="/regions" component={Regions} />
          <Route path="/specifications" component={Specifications} />
          <Route path="/devices" component={Devices} />
          <Route path="/filter-options" component={FilterOptions} />
          <Route path="/submit" component={SubmitSection} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
