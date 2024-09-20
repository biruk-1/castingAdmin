import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsSpeedometer2,  
  BsTagsFill,      
  BsPeopleFill,    
  BsFillGearFill,  
  BsListCheck,     
  BsMenuButtonWideFill, 
  BsChevronDown,   
  BsChevronUp,     
  BsPersonCircle,  
  BsJustify,       
  BsXLg,           
  BsFillFolderFill
} from 'react-icons/bs';
import '../styles/Sidebar.css';

function MySidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <BsJustify className='icon hamburger_icon' onClick={toggleSidebar} />

      {/* Sidebar */}
      <aside id="sidebar" className={isSidebarOpen ? "sidebar sidebar-responsive active" : "sidebar"}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
           <img src='images/logo.png' className='logo-image' />
          </div>
          <BsXLg className='icon close_icon' onClick={toggleSidebar} />
        </div>

        <ul className='sidebar-list'>
          {/*Profile  */}
          <li className='sidebar-list-item'>
           <Link to="/profile">
            <BsPersonCircle className='icon_header' /> <span>Profile</span>
           </Link>
          </li>
          {/* Dashboard */}
          <li className='sidebar-list-item'>
            <Link to="/dashboard">
              <BsSpeedometer2 className='icon' /> <span>Dashboard</span>
            </Link>
          </li>

          {/* User Section with Dropdown */}
          <li className='sidebar-list-item' onClick={toggleUserMenu}>
            <div className='user-section'>
              <BsFillFolderFill className='icon' /> <span>User</span>
              {isUserMenuOpen ? <BsChevronUp className='chevron-icon' /> : <BsChevronDown className='chevron-icon' />}
            </div>
          </li>
          {isUserMenuOpen && (
            <ul className='sidebar-submenu'>
              <li className='sidebar-list-item'>
                <Link to="/user-add">User Add</Link>
              </li>
              <li className='sidebar-list-item'>
                <Link to="/user-list">User List</Link>
              </li>
              <li className='sidebar-list-item'>
                <Link to="/user-edit">User Edit</Link>
              </li>
            </ul>
          )}

          {/* Categories */}
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsTagsFill className='icon' /> <span>Categories</span>
            </Link>
          </li>

          {/* Customers */}
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsPeopleFill className='icon' /> <span>Customers</span>
            </Link>
          </li>

          {/* Models */}
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsListCheck className='icon' /> <span>Models</span>
            </Link>
          </li>

          {/* Reports */}
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsMenuButtonWideFill className='icon' /> <span>Reports</span>
            </Link>
          </li>

          {/* Settings */}
          <li className='sidebar-list-item'>
            <Link to="#">
              <BsFillGearFill className='icon' /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default MySidebar;
