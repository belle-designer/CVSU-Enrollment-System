import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import profile from '../assets/images/profile.jpg';

import Dashboard from './Dashboard';
import Payment from './Payment';
import RegularStudent from './RegularStudent';
import IrregularStudent from './IrregularStudent';
import ReturneeStudent from './ReturneeStudent';
import Summary from './Summary';

const OfficerDashboard = () => {
  const navigate = useNavigate(); // Ensure navigation works

  const [activeSection, setActiveSection] = useState('dashboard');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);



    // Handle dropdown toggle
    const toggleDropdown = (section) => {
      setOpenDropdown(openDropdown === section ? null : section); // Toggle dropdown visibility
    };
  
    // Handle section change (content update)
    const handleSectionChange = (section) => {
      // If "Dashboard" is clicked, close the dropdown and reset everything
      if (section === 'dashboard') {
        setOpenDropdown(null); // Close all dropdowns
        setActiveSection('dashboard'); // Set active section to dashboard
      } else {
        // Update the active section without closing the dropdown
        setActiveSection(section);
    
        // For dropdowns, ensure they remain open when clicked
        if (['payment', 'admissionmanagement', 'enrollmentmanagement', 'instructor', 'report'].includes(section)) {
          // Open or keep the dropdown open
          setOpenDropdown(openDropdown === section ? null : section);
        }
      }
    };



  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = () => {
    navigate('/'); // Redirect to the home page
    setIsModalOpen(false);
  };

  return (
    <div className="main-layout">
      {/* Sidebar */}
      <section id="sidebar" className={sidebarCollapsed ? 'hide' : ''}>
        <a href="#" className="brand">
          <img src="/logo.png" alt="CvSU-Bacoor" />
          CvSU-Bacoor
        </a>
        <ul className="side-menu">
          <li>
            <a
              href="#"
              className={activeSection === 'dashboard' ? 'active' : ''}
              onClick={() => handleSectionChange('dashboard')}
            >
              <i className="bx bxs-dashboard icon"></i> Dashboard
            </a>
          </li>
          <li className="divider" data-text="main">Main</li>
                 {/* Students Dropdown */}
                 <li>
            <a 
              href="#" 
              onClick={() => handleSectionChange('payment')}
              className={openDropdown === 'payment' || activeSection === 'payment' ? 'active' : ''}
            >
              <i className="bx bx-male-female icon"></i> Payment Management <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'payment' ? 'show' : ''}`}>
              <li><a href="#" onClick={() => handleSectionChange('regularstudent')}>Regular Student</a></li>
              <li><a href="#" onClick={() => handleSectionChange('irregularstudent')}>Irregular Student</a></li>
              <li><a href="#" onClick={() => handleSectionChange('returneestudent')}>Returnee Student</a></li>
            </ul>
          </li>

          {/* Report Dropdown */}
          <li>
            <a 
              href="#" 
              onClick={() => handleSectionChange('report')}
              className={openDropdown === 'report' || activeSection === 'report' ? 'active' : ''}
            >
              <i className="bx bxs-notepad icon"></i> Report <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'report' ? 'show' : ''}`}>
              <li><a href="#" onClick={() => handleSectionChange('summary')}>Summary</a></li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Content Section */}
      <section id="content" className="w-full">
        <nav>
          <i className="bx bx-menu toggle-sidebar" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}></i>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search icon"></i>
            </div>
          </form>

          <a href="#" className="nav-link">
            <i className="bx bxs-bell icon"></i>
            <span className="badge">5</span>
          </a>
          <span className="divider"></span>
          <div className="profile">
            <img
              src={profile}
              alt="Profile"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100"
                    onClick={handleDropdownItemClick}
                  >
                    <i className="bx bxs-user-circle icon mr-2"></i> Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100"
                    onClick={handleDropdownItemClick}
                  >
                    <i className="bx bxs-cog"></i> Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-green-100"
                    onClick={handleLogoutClick}
                  >
                    <i className="bx bxs-log-out-circle"></i> Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-bold text-center mb-4">Are you sure you want to log out?</h2>
              <div className="flex justify-between">
                <button
                  onClick={handleCancelLogout}
                  className="bg-gray-300 text-black py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Confirm Logout
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="content-body">
          {activeSection === 'dashboard' && <Dashboard />}
          {activeSection === 'payment' && <Payment />}
          {activeSection === 'regularstudent' && <RegularStudent />}
          {activeSection === 'irregularstudent' && <IrregularStudent />}
          {activeSection === 'returneestudent' && <ReturneeStudent />}
          {activeSection === 'summary' && <Summary />}
        </div>
      </section>
    </div>
  );
};

export default OfficerDashboard;
