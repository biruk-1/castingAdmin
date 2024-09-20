import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyHeader from './components/newHeader';
import MySidebar from './components/newSideBar';
import UsersTable from './components/UsersTable';
import AddUser from './components/AddUser';
import UserEdit from './components/EditUser';
import Home from './components/home';
import './App.css';
import Body from './components/body';

import ProfileSection from './components/ProfileSection.js';
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className='sideBarAdjust'>
        <div>
        <MySidebar openSidebarToggle={isSidebarOpen} OpenSidebar={toggleSidebar} />
        </div>
        <div>
          <div>
          <MyHeader OpenSidebar={toggleSidebar} />
          </div>
          <div className="main-content">
            {/* Routing logic */}
            <Routes>
              <Route path="/profile" element={<ProfileSection/>}/>
              <Route path="/dashboard" element={<Body />} />
              <Route path="/user-list" element={<UsersTable />} />
              <Route path="/user-add" element={<AddUser />} />
              <Route path="/user-edit" element={<UserEdit />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
