import React, { useState } from 'react';
import './Officer.css'; // Assuming the CSS is in this file
import Dashboard from './Dashboard';
import Payment from './Payment';
import RegularStudent from './RegularStudent';
import IrregularStudent from './IrregularStudent';
import ReturneeStudent from './ReturneeStudent';
import Summary from './Summary';

const OfficerDashboard = () => {

  const [title, setTitle] = useState("Profile");
  const [activeMenu, setActiveMenu] = useState("profile");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  
  // State for sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // State for active content section
  const [activeSection, setActiveSection] = useState('dashboard');

  // State for active dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

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
    setIsDropdownOpen(false); // Close the dropdown when any item is clicked
  };
  

  const handleLogoutClick = () => {
    setIsModalOpen(true); // Show the confirmation modal
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmLogout = () => {
    navigate('/'); // Redirect to the home page
    setIsModalOpen(false); // Close the modal
  };
  

  
  return (
    <div className="main-layout" >
      {/* Sidebar */}
      <section id="sidebar" className={sidebarCollapsed ? 'hide' : ''}>
      <a href="#" className="brand">
        <img src="/logo.png" alt="CvSU-Bacoor" />
        CvSU-Bacoor
        </a>
        <ul className="side-menu">
          {/* Dashboard */}
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
      <section id="content" className='w-full'>
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
            <img src="/profile.jpg" alt="Profile" />
            <ul className="profile-link">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </nav>

        {/* Dynamic Content */}
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
