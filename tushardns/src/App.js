import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectInformation from './components/ProjectInformation';
import Regions from './components/Regions';
import Specifications from './components/Specifications';
import Devices from './components/Devices';
import FilterOptions from './components/FilterOptions';
import SubmitSection from './components/SubmitSection';
import './App.css'
function App() {
  return (
    <Router>
      <div className="app d-flex">
        <div>
        <Sidebar />
        </div>
     
        <div className="content">
          <Routes>
            <Route path="/project-information" element={<ProjectInformation />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/filter-options" element={<FilterOptions />} />
            <Route path="/submit" element={<SubmitSection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
