import React, { useState } from 'react';
import './AdminDashboard.css'; // Assuming the CSS is in this file
import Dashboard from './Dashboard';
import Students from './Students';
import RegularStudent from './RegularStudent';
import IrregularStudent from './IrregularStudent';
import ReturneeStudent from './ReturneeStudent';
import AdmissionStatus from './AdmissionStatus';
import AdmissionManagement from './AdmissionStatus';
import EnrollmentManagement from './EnrollmentManagement';
import EnrollmentStatus from './EnrollmentStatus';
import EnrollmentHistory from './EnrollmentHistory';
import Instructor from './Instructor';
import Subjects from './Subjects';
import Grades from './Grades';
import Checklists from './Checklists';
import Report from './Summary.jsx';
import Summary from './Summary.jsx';


const AdminDashboard = () => {
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
      if (['students', 'admissionmanagement', 'enrollmentmanagement', 'instructor', 'report'].includes(section)) {
        // Open or keep the dropdown open
        setOpenDropdown(openDropdown === section ? null : section);
      }
    }
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
              onClick={() => handleSectionChange('students')}
              className={openDropdown === 'students' || activeSection === 'students' ? 'active' : ''}
            >
              <i className="bx bx-male-female icon"></i> Students <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'students' ? 'show' : ''}`}>
              <li><a href="#" onClick={() => handleSectionChange('regularstudent')}>Regular Student</a></li>
              <li><a href="#" onClick={() => handleSectionChange('irregularstudent')}>Irregular Student</a></li>
              <li><a href="#" onClick={() => handleSectionChange('returneestudent')}>Returnee Student</a></li>
            </ul>
          </li>

          {/* Admission Management Dropdown */}
          <li>
            <a 
              href="#" 
              onClick={() => handleSectionChange('admissionmanagement')}
              className={openDropdown === 'admissionmanagement' || activeSection === 'admissionmanagement' ? 'active' : ''}
            >
              <i className="bx bxs-group icon"></i> Admission Management <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'admissionmanagement' ? 'show' : ''}`}> 
              <li><a href="#" onClick={() => handleSectionChange('admissionstatus')}>Admission Status</a></li>
            </ul>
          </li>

          <li className="divider" data-text="faculty">Faculty</li>

          {/* Enrollment Management Dropdown */}
          <li>
            <a 
              href="#" 
              onClick={() => handleSectionChange('enrollmentmanagement')}
              className={openDropdown === 'enrollmentmanagement' || activeSection === 'enrollmentmanagement' ? 'active' : ''}
            >
              <i className="bx bxs-group icon"></i> Enrollment Management <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'enrollmentmanagement' ? 'show' : ''}`}>
              <li><a href="#" onClick={() => handleSectionChange('enrollmentstatus')}>Enrollment Status</a></li>
              <li><a href="#" onClick={() => handleSectionChange('enrollmenthistory')}>Enrollment History</a></li>
            </ul>
          </li>

          {/* Instructor Dropdown */}
          <li>
            <a 
              href="#" 
              onClick={() => handleSectionChange('instructor')}
              className={openDropdown === 'instructor' || activeSection === 'instructor' ? 'active' : ''}
            >
              <i className="bx bxs-notepad icon"></i> Instructors Assignment <i className="bx bx-chevron-right icon-right"></i>
            </a>
            <ul className={`side-dropdown ${openDropdown === 'instructor' ? 'show' : ''}`}>
              <li><a href="#" onClick={() => handleSectionChange('subjects')}>Subjects</a></li>
              <li><a href="#" onClick={() => handleSectionChange('grades')}>Grades</a></li>
              <li><a href="#" onClick={() => handleSectionChange('checklists')}>Checklists</a></li>
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
          {activeSection === 'students' && <Students />}
          {activeSection === 'regularstudent' && <RegularStudent />}
          {activeSection === 'irregularstudent' && <IrregularStudent />}
          {activeSection === 'returneestudent' && <ReturneeStudent />}
          {activeSection === 'admissionmanagement' && <AdmissionManagement />}
          {activeSection === 'admissionstatus' && <AdmissionStatus />}
          {activeSection === 'enrollmentmanagement' && <EnrollmentManagement />}
          {activeSection === 'enrollmentstatus' && <EnrollmentStatus />}
          {activeSection === 'enrollmenthistory' && <EnrollmentHistory />}
          {activeSection === 'instructor' && <Instructor />}
          {activeSection === 'subjects' && <Subjects />}
          {activeSection === 'grades' && <Grades />}
          {activeSection === 'checklists' && <Checklists />}
          {activeSection === 'report' && <Report />}
          {activeSection === 'summary' && <Summary />}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
